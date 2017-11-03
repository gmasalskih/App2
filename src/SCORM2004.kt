object SCORM{
    @JsName("getValue")
    fun getValue(param: String)=(window.SCORM2004_objAPI.GetValue(param)).toString()

    @JsName("setValue")
    fun setValue(param: String, value: Any){
        when(value){
            is CharSequence -> window.SCORM2004_objAPI.SetValue(param, value)
            is Number -> window.SCORM2004_objAPI.SetValue(param, value)
            is Boolean -> window.SCORM2004_objAPI.SetValue(param, value)
        }
        window.SCORM2004_objAPI.Commit()
    }
}

enum class DataSCORM(val value:String){
    Version("cmi._version"),
    CommentsFromLearnerChildren("cmi.comments_from_learner._children"),
    CommentsFromLearnerCount("cmi.comments_from_learner._count"),
    CommentsFromLearnerNComment("cmi.comments_from_learner.n.comment"),
    CommentsFromLearnerNLocation("cmi.comments_from_learner.n.location"),
    CommentsFromLearnerNTimestamp("cmi.comments_from_learner.n.timestamp"),
    CommentsFromLmsChildren("cmi.comments_from_lms._children"),
    CommentsFromLmsCount("cmi.comments_from_lms._count"),
    CommentsFromLmsNComment("cmi.comments_from_lms.n.comment"),
    CommentsFromLmsNLocation("cmi.comments_from_lms.n.location"),
    CommentsFromLmsNTimestamp("cmi.comments_from_lms.n.timestamp"),
    CompletionStatus("cmi.completion_status"),
    CompletionThreshold("cmi.completion_threshold"),
    Credit("cmi.credit"),
    Entry("cmi.entry"),
    Exit("cmi.exit"),
    InteractionsChildren("cmi.interactions._children"),
    InteractionsCount("cmi.interactions._count"),
    InteractionsNId("cmi.interactions.n.id"),
    InteractionsNType("cmi.interactions.n.type"),
    InteractionsNObjectivesCount("cmi.interactions.n.objectives._count"),
    InteractionsNObjectivesNId("cmi.interactions.n.objectives.n.id"),
    InteractionsNTimestamp("cmi.interactions.n.timestamp"),
    InteractionsNCorrectResponsesCount("cmi.interactions.n.correct_responses._count"),
    InteractionsNCorrectResponsesNPattern("cmi.interactions.n.correct_responses.n.pattern"),
    InteractionsNWeighting("cmi.interactions.n.weighting"),
    InteractionsNLearnerResponse("cmi.interactions.n.learner_response"),
    InteractionsNResult("cmi.interactions.n.result"),
    InteractionsNLatency("cmi.interactions.n.latency"),
    InteractionsNDescription("cmi.interactions.n.description"),
    LaunchData("cmi.launch_data"),
    LearnerId("cmi.learner_id"),
    LearnerName("cmi.learner_name"),
    LearnerPreferenceChildren("cmi.learner_preference._children"),
    LearnerPreferenceAudioLevel("cmi.learner_preference.audio_level"),
    LearnerPreferenceLanguage("cmi.learner_preference.language"),
    LearnerPreferenceDeliverySpeed("cmi.learner_preference.delivery_speed"),
    LearnerPreferenceAudioCaptioning("cmi.learner_preference.audio_captioning"),
    Location("cmi.location"),
    MaxTimeAllowed("cmi.max_time_allowed"),
    Mode("cmi.mode"),
    ObjectivesChildren("cmi.objectives._children"),
    ObjectivesCount("cmi.objectives._count"),
    ObjectivesNId("cmi.objectives.n.id"),
    ObjectivesNScoreChildren("cmi.objectives.n.score._children"),
    ObjectivesNScoreScaled("cmi.objectives.n.score.scaled"),
    ObjectivesNScoreRaw("cmi.objectives.n.score.raw"),
    ObjectivesNScoreMin("cmi.objectives.n.score.min"),
    ObjectivesNScoreMax("cmi.objectives.n.score.max"),
    ObjectivesNSuccessStatus("cmi.objectives.n.success_status"),
    ObjectivesNCompletionStatus("cmi.objectives.n.completion_status"),
    ObjectivesNProgressMeasure("cmi.objectives.n.progress_measure"),
    ObjectivesNDescription("cmi.objectives.n.description"),
    ProgressMeasure("cmi.progress_measure"),
    ScaledPassingScore("cmi.scaled_passing_score"),
    ScoreChildren("cmi.score._children"),
    ScoreScaled("cmi.score.scaled"),
    ScoreRaw("cmi.score.raw"),
    ScoreMin("cmi.score.min"),
    ScoreMax("cmi.score.max"),
    SessionTime("cmi.session_time"),
    SuccessStatus("cmi.success_status"),
    SuspendData("cmi.suspend_data"),
    TimeLimitAction("cmi.time_limit_action"),
    TotalTime("cmi.total_time")
}

