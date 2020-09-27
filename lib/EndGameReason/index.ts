enum EndGameReason {
    UserDisconnected = 'מישהו התנתק, חכו לכולם שיתחברו מחדש',
    GameAborted = 'מישהו פוצץ את המשחק',
    CompositionVoteFailed = 'לא הצלחתם להחליט על קבוצה למשימה 5 פעמים רצוף, הרעים ניצחו!',
    QuestsFailed = 'נכשלתם ב-3 משימות, הרעים ניצחו!'
}

export default EndGameReason;
