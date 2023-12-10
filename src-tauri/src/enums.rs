use serde::{Deserialize, Serialize};
use sqlx::{Decode, Encode};
use strum_macros::{Display, EnumString};

// --[ StatusType ]---------------------------------------------------------------------------------
#[derive(Serialize, Deserialize, Debug, EnumString, Display, Decode, Encode)]
#[sqlx(rename_all = "snake_case")]
pub(crate) enum StatusType {
    KlantGebeld,
    InBehandeling,
    InDeWacht,
    Klaar,
    Opgehaald,
}

impl sqlx::Type<sqlx::MySql> for StatusType {
    fn type_info() -> <sqlx::MySql as sqlx::Database>::TypeInfo {
        <str as sqlx::Type<sqlx::MySql>>::type_info()
    }

    fn compatible(ty: &<sqlx::MySql as sqlx::Database>::TypeInfo) -> bool {
        <str as sqlx::Type<sqlx::MySql>>::compatible(ty)
    }
}
