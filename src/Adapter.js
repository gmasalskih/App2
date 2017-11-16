App = {
    Data: {
        slides: {
            toArray: function () {
                return [{name: "", id: "", uid: ""}];
            }
        },
        items: {
            toArray: function () {
                return [{name: "", slideUID: ""}];
            }
        },
        TEBs: {
            toArray: function () {
                return [{name: "", varName: "", slideUID: ""}];
            }
        }
    },
    goToSlideByLabel: function (label) {
    },
    getSlideID: function (label) {

    },
    getSlideUID: function (label) {

    },
    getSlideNameById: function (id) {

    },
    getSlideNameByUID: function (uid) {

    },
    getItem: function (label) {

    },
    getItems: function (label) {

    },
    hide: function (label) {

    },
    hideAll: function (label) {

    },
    show: function (label) {

    },
    showAll: function (label) {

    },
    getCurrentItemState: function (label) {

    },
    getAllState: function (label) {

    },
    changeState: function (label) {

    },
    changeStateAll: function (label, state) {

    },
    getTEBs: function (label) {

    },
    getValueTEB: function (label) {

    },
    getValue: function (label) {

    },
    setValue: function (label, value) {

    },
    getStudentID: function () {

    },
    completed: function () {

    },
    setPercent: function (percent) {

    },
    getPercent: function () {

    },
    getFullStudentName: function () {

    },
    getStudentName: function () {

    },
    getItemsOnSlide: function (slideName) {

    },
    getTEBsOnSlide: function (slideName) {

    },
    Init: {
        suffixSmartShape: "SS",
        booleanTrueMarker: "true",
        varNameUserName: "__________userName__________",
        defaultUserName: "Константин Александрович",
        varNameQuestJson: "QuestJson"
    },
    Quest: {
        checkCurrentSlide: function () {
        }
    },
    CpEvent: {
        slideEnter: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        slideExit: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        startPlayBarScrubbing: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        endPlayBarScrubbing: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        interactiveItemSubmit: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        moviePause: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        movieResume: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        movieStart: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        movieStop: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        questionSkip: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        questionSubmit: {
            subscribe: function (fn) {
            },
            filter: function (fn) {

            }
        },
        getVariableValueChanged: function (varName) {
            return {
                subscribe: function (fn) {
                }, filter: function (fn) {
                }
            };
        }
    },
    DataCpEvent: {
        SlideEnter: {value: "CPAPI_SLIDEENTER"},
        SlideExit: {value: "CPAPI_SLIDEEXIT"},
        StartPlayBarScrubbing: {value: "CPAPI_STARTPLAYBARSCRUBBING"},
        EndPlayBarScrubbing: {value: "CPAPI_ENDPLAYBARSCRUBBING"},
        InteractiveItemSubmit: {value: "CPAPI_INTERACTIVEITEMSUBMIT"},
        MoviePause: {value: "CPAPI_MOVIEPAUSE"},
        MovieResume: {value: "CPAPI_MOVIERESUME"},
        MovieStart: {value: "CPAPI_MOVIESTART"},
        MovieStop: {value: "CPAPI_MOVIESTOP"},
        QuestionSkip: {value: "CPAPI_QUESTIONSKIP"},
        QuestionSubmit: {value: "CPAPI_QUESTIONSUBMIT"},
        VariableValueChanged: {value: "CPAPI_VARIABLEVALUECHANGED"}
    },
    SCORM: {
        getValue: function (param) {
        },
        setValue: function (param, value) {
        }
    },
    DataSCORM: {
        Version: {value: "cmi._version"},
        CommentsFromLearnerChildren: {value: "cmi.comments_from_learner._children"},
        CommentsFromLearnerCount: {value: "cmi.comments_from_learner._count"},
        CommentsFromLearnerNComment: {value: "cmi.comments_from_learner.n.comment"},
        CommentsFromLearnerNLocation: {value: "cmi.comments_from_learner.n.location"},
        CommentsFromLearnerNTimestamp: {value: "cmi.comments_from_learner.n.timestamp"},
        CommentsFromLmsChildren: {value: "cmi.comments_from_lms._children"},
        CommentsFromLmsCount: {value: "cmi.comments_from_lms._count"},
        CommentsFromLmsNComment: {value: "cmi.comments_from_lms.n.comment"},
        CommentsFromLmsNLocation: {value: "cmi.comments_from_lms.n.location"},
        CommentsFromLmsNTimestamp: {value: "cmi.comments_from_lms.n.timestamp"},
        CompletionStatus: {value: "cmi.completion_status"},
        CompletionThreshold: {value: "cmi.completion_threshold"},
        Credit: {value: "cmi.credit"},
        Entry: {value: "cmi.entry"},
        Exit: {value: "cmi.exit"},
        InteractionsChildren: {value: "cmi.interactions._children"},
        InteractionsCount: {value: "cmi.interactions._count"},
        InteractionsNId: {value: "cmi.interactions.n.id"},
        InteractionsNType: {value: "cmi.interactions.n.type"},
        InteractionsNObjectivesCount: {value: "cmi.interactions.n.objectives._count"},
        InteractionsNObjectivesNId: {value: "cmi.interactions.n.objectives.n.id"},
        InteractionsNTimestamp: {value: "cmi.interactions.n.timestamp"},
        InteractionsNCorrectResponsesCount: {value: "cmi.interactions.n.correct_responses._count"},
        InteractionsNCorrectResponsesNPattern: {value: "cmi.interactions.n.correct_responses.n.pattern"},
        InteractionsNWeighting: {value: "cmi.interactions.n.weighting"},
        InteractionsNLearnerResponse: {value: "cmi.interactions.n.learner_response"},
        InteractionsNResult: {value: "cmi.interactions.n.result"},
        InteractionsNLatency: {value: "cmi.interactions.n.latency"},
        InteractionsNDescription: {value: "cmi.interactions.n.description"},
        LaunchData: {value: "cmi.launch_data"},
        LearnerId: {value: "cmi.learner_id"},
        LearnerName: {value: "cmi.learner_name"},
        LearnerPreferenceChildren: {value: "cmi.learner_preference._children"},
        LearnerPreferenceAudioLevel: {value: "cmi.learner_preference.audio_level"},
        LearnerPreferenceLanguage: {value: "cmi.learner_preference.language"},
        LearnerPreferenceDeliverySpeed: {value: "cmi.learner_preference.delivery_speed"},
        LearnerPreferenceAudioCaptioning: {value: "cmi.learner_preference.audio_captioning"},
        Location: {value: "cmi.location"},
        MaxTimeAllowed: {value: "cmi.max_time_allowed"},
        Mode: {value: "cmi.mode"},
        ObjectivesChildren: {value: "cmi.objectives._children"},
        ObjectivesCount: {value: "cmi.objectives._count"},
        ObjectivesNId: {value: "cmi.objectives.n.id"},
        ObjectivesNScoreChildren: {value: "cmi.objectives.n.score._children"},
        ObjectivesNScoreScaled: {value: "cmi.objectives.n.score.scaled"},
        ObjectivesNScoreRaw: {value: "cmi.objectives.n.score.raw"},
        ObjectivesNScoreMin: {value: "cmi.objectives.n.score.min"},
        ObjectivesNScoreMax: {value: "cmi.objectives.n.score.max"},
        ObjectivesNSuccessStatus: {value: "cmi.objectives.n.success_status"},
        ObjectivesNCompletionStatus: {value: "cmi.objectives.n.completion_status"},
        ObjectivesNProgressMeasure: {value: "cmi.objectives.n.progress_measure"},
        ObjectivesNDescription: {value: "cmi.objectives.n.description"},
        ProgressMeasure: {value: "cmi.progress_measure"},
        ScaledPassingScore: {value: "cmi.scaled_passing_score"},
        ScoreChildren: {value: "cmi.score._children"},
        ScoreScaled: {value: "cmi.score.scaled"},
        ScoreRaw: {value: "cmi.score.raw"},
        ScoreMin: {value: "cmi.score.min"},
        ScoreMax: {value: "cmi.score.max"},
        SessionTime: {value: "cmi.session_time"},
        SuccessStatus: {value: "cmi.success_status"},
        SuspendData: {value: "cmi.suspend_data"},
        TimeLimitAction: {value: "cmi.time_limit_action"},
        TotalTime: {value: "cmi.total_time"}
    }
}







