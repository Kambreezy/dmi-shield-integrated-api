import { DocEbsInput } from "../../api/models/DocumentEBS";

export type User = {
    displayName: string;
    phoneNumber: string;
    status: 'active' | 'blocked';
    suggestions?: string[];
    _id: string;
    createdAt: Date;
    updatedAt: Date;
};

export type EscalationForm = {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    eventType: string;
    dateResponseStarted: Date;
    reason: string;
    reasonOther: string;
    dateEscalated: Date;
    via: 'internet' | 'sms';
};

export type InvestigationForm = {
  _id: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    dateSCDSCInformed: Date;
    dateInvestigationStarted: Date;
    dateEventStarted: Date;
    symptoms: string;
    humansCases: number;
    humansCasesHospitalized: number;
    humansDead: number;
    animalsCases: number;
    animalsDead: number;
    isCauseKnown: string;
    cause: string;
    isLabSamplesCollected: string;
    dateSampleCollected: Date;
    labResults: string;
    dateLabResultsReceived: Date;
    isNewCasedReportedFromInitialArea: string;
    isNewCasedReportedFromNewAreas: string;
    isEventSettingPromotingSpread: string;
    additionalInformation: string;
    riskClassification: string;
    isEventInfectious: string;
    eventCategories: string[];
    systemsAffectedByEvent: string[];
    responseActivities: string[];
    dateSCMOHInformed: Date;
    via: 'internet' | 'sms';
    spot?: Role['spot'];
};

export type ResponseForm = {
  _id: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    eventType: string;
    dateSCMOHInformed: Date;
    dateResponseStarted: Date;
    responseActivities: string[];
    otherResponseActivity: string;
    outcomeOfResponse: string;
    recommendations: string[];
    dateEscalated: Date;
    dateOfReport: Date;
    additionalInformation: string;
    via: 'internet' | 'sms';
    spot?: Role['spot'];
};

export type VerificationForm = {
  _id: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    source: string;
    description: string;
    isMatchingSignal: string;
    updatedSignal: string;
    isReportedBefore: string;
    dateHealthThreatStarted: Date;
    informant: string;
    otherInformant: string;
    additionalInformation: string;
    dateVerified: Date;
    isThreatStillExisting: string;
    threatTo: string;
    dateSCDSCInformed: Date;
    via: 'internet' | 'sms';
    spot?: Role['spot'];
};

export type SummaryForm = {
  _id: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    eventStatus: string;
    escalatedTo: string;
    cause: string;
    via: 'internet' | 'sms';
    spot?: Role['spot'];
};

export type LabForm = {
  _id: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    dateSampleCollected: Date;
    labResults: string;
    dateLabResultsReceived: Date;
    via: 'internet' | 'sms';
    spot?: Role['spot'];
};

export type Role = {
  _id: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    unit: string;
    units?: string[];
    dateLastReported?: { test: Date; live: Date };
    dateLastVerified?: { test: Date; live: Date };
    spot:
        | 'HEBS'
        | 'LEBS'
        | 'CEBS'
        | 'EBS'
        | 'AHA'
        | 'CHA'
        | 'CHV'
        | 'VEBS'
        | 'VET'
        | 'SFP'
        | 'HCW'
        | 'PMEBS'
        | 'PEBS/MEBS'
        | 'CDR'
        | 'VIEWER';
    status: 'active' | 'blocked';
};

export type Unit = {
    name: string;
    uid?: string;
    code?: string;
    parent?: Unit;
    dateLastReported?: {
        _id: string;
        createdAt: Date;
        updatedAt: Date;
        test: Date;
        live: Date;
    };
    state?: 'test' | 'live';
    units?: string[];
    type:
        | 'Country'
        | 'County'
        | 'Subcounty'
        | 'Ward'
        | 'Health facility'
        | 'Learning institution'
        | 'Community unit'
        | 'Veterinary facility';
    suggestions?: string[];
    _id: string;
    _status: string;
    createdAt: Date;
    updatedAt: Date;
};

export type TaskPage = {
    docs: Task[];
    total: number;
    limit: number;
    page: number;
    pages: number;
    sort: string;
};

export type Task = {
    _id: string;
    _status: string;
    user: User;
    unit: Unit;
    signalId: string;
    signal: string;
    units?: string[];
    suggestions?: string[];
    pmebs?: {
      _id: string;
    createdAt: Date;
    updatedAt: Date;
        reportForm?: {
            user: User;
            dateDetected: Date;
            description: string;
            source: string;
            unit: string;
            locality: string;
            dateReported: Date;
            via: 'internet' | 'sms';
            spot?: Role['spot'];
        };
        requestForm?: {
            user: User;
            description: string;
            unit: string;
            locality: string;
            dateReported: Date;
            dateRequested: Date;
            via: 'internet' | 'sms';
            spot?: Role['spot'];
        };
    };
    vebs?: {
      _id: string;
    createdAt: Date;
    updatedAt: Date;
        verificationForm?: VerificationForm;
        investigationForm?: InvestigationForm;
        responseForm?: ResponseForm;
        escalationForm?: EscalationForm;
        summaryForm?: SummaryForm;
        labForm?: LabForm;
    };
    cebs?: {
      _id: string;
    createdAt: Date;
    updatedAt: Date;
        verificationForm?: VerificationForm;
        investigationForm?: InvestigationForm;
        responseForm?: ResponseForm;
        escalationForm?: EscalationForm;
        summaryForm?: SummaryForm;
        labForm?: LabForm;
    };
    hebs?: {
      _id: string;
    createdAt: Date;
    updatedAt: Date;
        verificationForm?: VerificationForm;
        investigationForm?: InvestigationForm;
        responseForm?: ResponseForm;
        escalationForm?: EscalationForm;
        summaryForm?: SummaryForm;
        labForm?: LabForm;
    };
    lebs?: {
      _id: string;
    createdAt: Date;
    updatedAt: Date;
        verificationForm?: {
            user: User;
            description: string;
            isMatchingSignal: string;
            updatedSignal: string;
            dateHealthThreatStarted: Date;
            informant: string;
            otherInformant: string;
            additionalInformation: string;
            dateVerified: Date;
            isStillHappening: string;
            isReportedBefore: string;
            dateSCDSCInformed: Date;

            via: 'internet' | 'sms';
            spot?: Role['spot'];
        };
        investigationForm?: {
          _id: string;
    createdAt: Date;
    updatedAt: Date;
            user: User;
            dateSCDSCInformed: Date;
            dateInvestigationStarted: Date;
            dateEventStarted: Date;
            dateRRTNotified: Date;
            isCovid19WorkingCaseDefinitionMet: string;
            isEventSettingPromotingSpread: string;
            measureHandHygiene: string;
            measureTempScreening: string;
            measurePhysicalDistancing: string;
            measureUseOfMasks: string;
            measureVentilation: string;
            additionalInformation: string;
            riskClassification: string;
            isEventInfectious: string;
            eventCategories: string[];
            systemsAffectedByEvent: string[];
            responseActivities: string[];
            symptoms: string[];
            symptomsOther: string;
            isSamplesCollected: string;
            labResults: string;
            measureSocialDistancing: string;
            via: 'internet' | 'sms';
            spot?: Role['spot'];
        };
        responseForm?: {
          _id: string;
    createdAt: Date;
    updatedAt: Date;
            user: User;
            dateSCMOHInformed: Date;
            dateResponseStarted: Date;
            dateSamplesCollected: Date;
            dateOfTestResults: Date;
            isCovid19WorkingCaseDefinitionMet: string;
            isCIFFilledAndSamplesCollected: string;
            reasonsNoSampleCollectedOther: string;
            responseActivitiesOther: string;
            isHumansQuarantinedFollowedUp: string;
            eventStatus: string;
            responseActivities: string[];
            additionalResponseActivities: string[];
            reasonsNoSampleCollected: string[];
            humansQuarantinedSelf: number;
            humansQuarantinedSchool: number;
            humansQuarantinedInstitutional: number;
            humansIsolationSchool: number;
            humansIsolationHealthFacility: number;
            humansIsolationHome: number;
            humansIsolationInstitutional: number;
            humansDead: number;
            humansPositive: number;
            humansTested: number;
            humansCases: number;
            humansQuarantined: number;
            quarantineTypes: string[];
            isHumansIsolated: string;
            isolationTypes: string[];
            eventStatuses: string[];
            additionalInformation: string;
            via: 'internet' | 'sms';
            spot?: Role['spot'];
        };
        escalationForm?: EscalationForm;
        summaryForm?: SummaryForm;
        labForm?: LabForm;
    };
    status: 'pending' | 'completed';
    state: 'test' | 'live';
    via: 'internet' | 'sms';
    spot?: Role['spot'];
    version: string;
};

export function formatTask(task: Task): DocEbsInput {
  return {
      _ID: task._id,
      _STATUS: task._status,
      UNIT_ID: task.unit._id,
      UNIT_CREATEDAT: task.unit.createdAt,
      UNIT_UPDATEDAT: task.unit.createdAt,
      UNIT_CODE: task.unit.code,
      UNIT_UID: task.unit.uid,
      UNIT_STATE: task.unit.state,
      UNIT_TYPE: task.unit.type,
      UNIT_SUGGESTIONS: task.unit.suggestions.join(";"),
      UNIT_UNITS: task.unit.units.join(";"),
      UNIT_DATELASTREPORTED_ID: task.unit.dateLastReported?._id,
      UNIT_DATELASTREPORTED_TEST: task.unit.dateLastReported?.test,
      UNIT_DATELASTREPORTED_LIVE: task.unit.dateLastReported?.live,
      UNIT_DATELASTREPORTED_UPDATEDAT:
          task.unit.dateLastReported?.updatedAt,
      UNIT_DATELASTREPORTED_CREATEDAT:
          task.unit.dateLastReported?.createdAt,
      UNIT_PARENT_ID: '',
      UNIT_PARENT_CREATEDAT: undefined,
      UNIT_PARENT_UPDATEDAT: undefined,
      UNIT_PARENT_CODE: '',
      UNIT_PARENT_UID: '',
      UNIT_PARENT_PARENT: '',
      UNIT_PARENT_STATE: '',
      UNIT_PARENT_TYPE: '',
      UNIT_PARENT_SUGGESTIONS: '',
      UNIT_PARENT_UNITS: '',
      UNIT_PARENT_DATELASTREPORTED_ID: '',
      UNIT_PARENT_DATELASTREPORTED_TEST: undefined,
      UNIT_PARENT_DATELASTREPORTED_LIVE: undefined,
      UNIT_PARENT_DATELASTREPORTED_UPDATEDAT: undefined,
      UNIT_PARENT_DATELASTREPORTED_CREATEDAT: undefined,
      USER_ID: task.user._id,
      USER_CREATEDAT: task.user.createdAt,
      USER_UPDATEDAT: task.user.updatedAt,
      USER_STATUS: task.user.status,
      SIGNALID: task.signalId,
      SIGNAL: task.signal,
      SUGGESTIONS: task.suggestions.join(";"),
      UNITS: task.units.join(";"),
      CEBS_ID: task.cebs?._id,
      CEBS_CREATEDAT: task.cebs?.createdAt,
      CEBS_UPDATEDAT: task.cebs?.updatedAt,
      CEBS_VERIFICATIONFORM_ID: task.cebs?.verificationForm?._id,
      CEBS_VERIFICATIONFORM_USER: task.cebs?.verificationForm?.user._id,
      CEBS_VERIFICATIONFORM_SOURCE: task.cebs?.verificationForm?.source,
      CEBS_VERIFICATIONFORM_DESCRIPTION:
          task.cebs?.verificationForm?.description,
      CEBS_VERIFICATIONFORM_ISMATCHINGSIGNAL:
          task.cebs?.verificationForm?.isMatchingSignal,
      CEBS_VERIFICATIONFORM_UPDATEDSIGNAL:
          task.cebs?.verificationForm?.updatedSignal,
      CEBS_VERIFICATIONFORM_ISREPORTEDBEFORE:
          task.cebs?.verificationForm?.isReportedBefore,
      CEBS_VERIFICATIONFORM_DATEHEALTHTHREATSTARTED:
          task.cebs?.verificationForm?.dateHealthThreatStarted,
      CEBS_VERIFICATIONFORM_INFORMANT:
          task.cebs?.verificationForm?.informant,
      CEBS_VERIFICATIONFORM_OTHERINFORMANT:
          task.cebs?.verificationForm?.otherInformant,
      CEBS_VERIFICATIONFORM_ADDITIONALINFORMATION:
          task.cebs?.verificationForm?.additionalInformation,
      CEBS_VERIFICATIONFORM_DATEVERIFIED:
          task.cebs?.verificationForm?.dateVerified,
      CEBS_VERIFICATIONFORM_ISTHREATSTILLEXISTING:
          task.cebs?.verificationForm?.isThreatStillExisting,
      CEBS_VERIFICATIONFORM_THREATTO:
          task.cebs?.verificationForm?.threatTo,
      CEBS_VERIFICATIONFORM_DATESCDSCINFORMED:
          task.cebs?.verificationForm?.dateSCDSCInformed,
      CEBS_VERIFICATIONFORM_VIA: task.cebs?.verificationForm?.via,
      CEBS_VERIFICATIONFORM_SPOT: task.cebs?.verificationForm?.spot,
      CEBS_VERIFICATIONFORM_CREATEDAT:
          task.cebs?.verificationForm?.createdAt,
      CEBS_VERIFICATIONFORM_UPDATEDAT:
          task.cebs?.verificationForm?.updatedAt,
      CEBS_INVESTIGATIONFORM_ID: task.cebs?.investigationForm?._id,
      CEBS_INVESTIGATIONFORM_USER: task.cebs?.investigationForm?.user._id,
      CEBS_INVESTIGATIONFORM_DATESCDSCINFORMED:
          task.cebs?.investigationForm?.dateSCDSCInformed,
      CEBS_INVESTIGATIONFORM_DATEEVENTSTARTED:
          task.cebs?.investigationForm?.dateEventStarted,
      CEBS_INVESTIGATIONFORM_SYMPTOMS:
          task.cebs?.investigationForm?.symptoms,
      CEBS_INVESTIGATIONFORM_HUMANCASES:
          task.cebs?.investigationForm?.humansCases,
      CEBS_INVESTIGATIONFORM_HUMANCASESHOSPITALIZED:
          task.cebs?.investigationForm?.humansCasesHospitalized,
      CEBS_INVESTIGATIONFORM_HUMANSDEAD:
          task.cebs?.investigationForm?.humansDead,
      CEBS_INVESTIGATIONFORM_ANIMALSCASES:
          task.cebs?.investigationForm?.animalsCases,
      CEBS_INVESTIGATIONFORM_ANIMALSDEAD:
          task.cebs?.investigationForm?.animalsDead,
      CEBS_INVESTIGATIONFORM_ISCAUSEKNOWN:
          task.cebs?.investigationForm?.isCauseKnown,
      CEBS_INVESTIGATIONFORM_CAUSE: task.cebs?.investigationForm?.cause,
      CEBS_INVESTIGATIONFORM_ISLABSAMPLESCOLLECTED:
          task.cebs?.investigationForm?.isLabSamplesCollected,
      CEBS_INVESTIGATIONFORM_DATESAMPLECOLLECTED:
          task.cebs?.investigationForm?.dateSampleCollected,
      CEBS_INVESTIGATIONFORM_LABRESULTS:
          task.cebs?.investigationForm?.labResults,
      CEBS_INVESTIGATIONFORM_DATELABRESULTSRECEIVED:
          task.cebs?.investigationForm?.dateLabResultsReceived,
      CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMINITIALAREA:
          task.cebs?.investigationForm?.isNewCasedReportedFromInitialArea,
      CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMNEWAREAS:
          task.cebs?.investigationForm?.isNewCasedReportedFromNewAreas,
      CEBS_INVESTIGATIONFORM_ADDITIONALINFORMATION:
          task.cebs?.investigationForm?.additionalInformation,
      CEBS_INVESTIGATIONFORM_RISKCLASSIFICATION:
          task.cebs?.investigationForm?.riskClassification,
      CEBS_INVESTIGATIONFORM_ISEVENTINFECTIOUS:
          task.cebs?.investigationForm?.isEventInfectious,
      CEBS_INVESTIGATIONFORM_EVENTCATEGORIES:
          task.cebs?.investigationForm?.eventCategories.join(";"),
      CEBS_INVESTIGATIONFORM_SYSTEMSAFFECTEDBYEVENT:
          task.cebs?.investigationForm?.systemsAffectedByEvent.join(";"),
      CEBS_INVESTIGATIONFORM_RESPONSEACTIVITIES:
          task.cebs?.investigationForm?.responseActivities.join(";"),
      CEBS_INVESTIGATIONFORM_DATESCMOHINFORMED:
          task.cebs?.investigationForm?.dateSCMOHInformed,
      CEBS_INVESTIGATIONFORM_VIA: task.cebs?.investigationForm?.via,
      CEBS_INVESTIGATIONFORM_SPOT: task.cebs?.investigationForm?.spot,
      CEBS_INVESTIGATIONFORM_CREATEDAT:
          task.cebs?.investigationForm?.createdAt,
      CEBS_INVESTIGATIONFORM_UPDATEDAT:
          task.cebs?.investigationForm?.updatedAt,
      CEBS_RESPONSEFORM_ID: task.cebs?.responseForm?._id,
      CEBS_RESPONSEFORM_USER: task.cebs?.responseForm?.user._id,
      CEBS_RESPONSEFORM_EVENTTYPE: task.cebs?.responseForm?.eventType,
      CEBS_RESPONSEFORM_DATESCMOHINFORMED:
          task.cebs?.responseForm?.dateSCMOHInformed,
      CEBS_RESPONSEFORM_DATERESPONSESTARTED:
          task.cebs?.responseForm?.dateResponseStarted,
      CEBS_RESPONSEFORM_RESPONSEACTIVITIES:
          task.cebs?.responseForm?.responseActivities.join(";"),
      CEBS_RESPONSEFORM_OTHERRESPONSEACTIVITY:
          task.cebs?.responseForm?.otherResponseActivity,
      CEBS_RESPONSEFORM_OUTCOMEOFRESPONSE:
          task.cebs?.responseForm?.outcomeOfResponse,
      CEBS_RESPONSEFORM_RECOMMENDATIONS:
          task.cebs?.responseForm?.recommendations.join(";"),
      CEBS_RESPONSEFORM_DATEESCALATED:
          task.cebs?.responseForm?.dateEscalated,
      CEBS_RESPONSEFORM_DATEOFREPORT:
          task.cebs?.responseForm?.dateOfReport,
      CEBS_RESPONSEFORM_ADDITIONALINFORMATION:
          task.cebs?.responseForm?.additionalInformation,
      CEBS_RESPONSEFORM_VIA: task.cebs?.responseForm?.via,
      CEBS_RESPONSEFORM_SPOT: task.cebs?.responseForm?.spot,
      CEBS_RESPONSEFORM_CREATEDAT: task.cebs?.responseForm?.createdAt,
      CEBS_RESPONSEFORM_UPDATEDAT: task.cebs?.responseForm?.updatedAt,
      CEBS_SUMMARYFORM_ID: task.cebs?.summaryForm?._id,
      CEBS_SUMMARYFORM_USER: task.cebs?.summaryForm?.user._id,
      CEBS_SUMMARYFORM_EVENTSTATUS: task.cebs?.summaryForm?.eventStatus,
      CEBS_SUMMARYFORM_ESCALATEDTO: task.cebs?.summaryForm?.escalatedTo,
      CEBS_SUMMARYFORM_CAUSE: task.cebs?.summaryForm?.cause,
      CEBS_SUMMARYFORM_VIA: task.cebs?.summaryForm?.via,
      CEBS_SUMMARYFORM_SPOT: task.cebs?.summaryForm?.spot,
      CEBS_SUMMARYFORM_CREATEDAT: task.cebs?.summaryForm?.createdAt,
      CEBS_SUMMARYFORM_UPDATEDAT: task.cebs?.summaryForm?.updatedAt,
      CEBS_ESCALATIONFORM_ID: task.cebs?.escalationForm?._id,
      CEBS_ESCALATIONFORM_USER: task.cebs?.escalationForm?.user._id,
      CEBS_ESCALATIONFORM_EVENTTYPE: task.cebs?.escalationForm?.eventType,
      CEBS_ESCALATIONFORM_DATERESPONSESTARTED:
          task.cebs?.escalationForm?.dateResponseStarted,
      CEBS_ESCALATIONFORM_REASON: task.cebs?.escalationForm?.reason,
      CEBS_ESCALATIONFORM_REASONOTHER:
          task.cebs?.escalationForm?.reasonOther,
      CEBS_ESCALATIONFORM_DATEESCALATED:
          task.cebs?.escalationForm?.dateEscalated,
      CEBS_ESCALATIONFORM_VIA: task.cebs?.escalationForm?.via,
      CEBS_ESCALATIONFORM_CREATEDAT: task.cebs?.escalationForm?.createdAt,
      CEBS_ESCALATIONFORM_UPDATEDAT: task.cebs?.escalationForm?.updatedAt
  };
}
