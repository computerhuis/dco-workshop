// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use sqlx::mysql::MySqlConnectOptions;
use sqlx::MySqlPool;

mod enums;
mod repair;

struct AppState {
    pool: MySqlPool,
}

fn main() {
    let pool = tauri::async_runtime::block_on(establish_connection());
    tauri::Builder::default()
        .manage(AppState { pool })
        .invoke_handler(tauri::generate_handler![repair::repairs])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

async fn establish_connection() -> MySqlPool {
    dotenv::dotenv().expect("Unable to load environment variables from .env file");
    let host = std::env::var("DATABASE_HOST").expect("Unable to read DATABASE_HOST env var");
    let port = std::env::var("DATABASE_PORT").expect("Unable to read DATABASE_PORT env var");
    let user = std::env::var("DATABASE_USER").expect("Unable to read DATABASE_USER env var");
    let passwd = std::env::var("DATABASE_PASSWD").expect("Unable to read DATABASE_PASSWD env var");
    let db = std::env::var("DATABASE_NAME").expect("Unable to read DATABASE_NAME env var");

    let opts: MySqlConnectOptions = MySqlConnectOptions::new()
        .host(&host)
        .port((&port).parse().unwrap())
        .username(&user)
        .password(&passwd)
        .database(&db);

    MySqlPool::connect_with(opts)
        .await
        .expect("Unable to connect to MariaDB")
}
