use chrono::NaiveDateTime;
use serde::{Deserialize, Serialize};

use crate::enums::StatusType;
use crate::AppState;

#[derive(Serialize, Deserialize, Debug, sqlx::FromRow)]
pub(crate) struct ActiveRepairs {
    id: i64,
    status: StatusType,
    computer_id: i64,
    check_in_date: Option<NaiveDateTime>,
    description: String,
    first_name: String,
    infix: String,
    last_name: String,
    manufacturer: String,
    model: Option<String>,
}

#[tauri::command]
pub async fn repairs(state: tauri::State<'_, AppState>) -> Result<Vec<ActiveRepairs>, String> {
    Ok(sqlx::query_as(
        r#"select r.id,
       r.status,
       r.computer_id,
       r.check_in_date,
       r.description,
       p.first_name,
       p.infix,
       p.last_name,
       c.manufacturer,
       c.model
from repairs r
         left join persons p on r.check_in_by = p.id
         left join computers c on r.computer_id = c.id
WHERE r.status != 'OPGEHAALD'"#,
    )
    .fetch_all(&state.pool)
    .await
    .expect("Unable to list Record"))
}
