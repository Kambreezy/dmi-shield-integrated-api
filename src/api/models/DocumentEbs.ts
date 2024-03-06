import { db } from '../../database/config';
import { DataTypes, Model, Optional } from 'sequelize';


export interface DocumentEbsAttributes {
    _ID: string;
    _STATUS: string;
    UNIT_ID: string;
    UNIT_CREATEDAT: Date;
    UNIT_UPDATEDAT: Date;
    UNIT_CODE: string;
    UNIT_UID: string;
    UNIT_STATE: string;
    UNIT_TYPE: string;
    UNIT_SUGGESTIONS: string;
    UNIT_UNITS: string;
    UNIT_DATELASTREPORTED_ID: string;
    UNIT_DATELASTREPORTED_TEST: Date;
    UNIT_DATELASTREPORTED_LIVE: Date;
    UNIT_DATELASTREPORTED_UPDATEDAT: Date;
    UNIT_DATELASTREPORTED_CREATEDAT: Date;

    UNIT_PARENT_ID: string;
    UNIT_PARENT_CREATEDAT: Date;
    UNIT_PARENT_UPDATEDAT: Date;
    UNIT_PARENT_CODE: string;
    UNIT_PARENT_UID: string;
    UNIT_PARENT_PARENT: string;
    UNIT_PARENT_STATE: string;
    UNIT_PARENT_TYPE: string;
    UNIT_PARENT_SUGGESTIONS: string;
    UNIT_PARENT_UNITS: string;
    UNIT_PARENT_DATELASTREPORTED_ID: string;
    UNIT_PARENT_DATELASTREPORTED_TEST: Date;
    UNIT_PARENT_DATELASTREPORTED_LIVE: Date;
    UNIT_PARENT_DATELASTREPORTED_UPDATEDAT: Date;
    UNIT_PARENT_DATELASTREPORTED_CREATEDAT: Date;

    USER_ID: string;
    USER_CREATEDAT: Date;
    USER_UPDATEDAT: Date;
    USER_STATUS: string;


    SIGNALID: string;
    SIGNAL: string;
    SUGGESTIONS: string;
    UNITS: string;

    CEBS_ID: string;
    CEBS_CREATEDAT: Date;
    CEBS_UPDATEDAT: Date;

    CEBS_VERIFICATIONFORM_ID: string;
    CEBS_VERIFICATIONFORM_USER: string;
    CEBS_VERIFICATIONFORM_SOURCE: string;
    CEBS_VERIFICATIONFORM_DESCRIPTION: string;
    CEBS_VERIFICATIONFORM_ISMATCHINGSIGNAL: string;
    CEBS_VERIFICATIONFORM_UPDATEDSIGNAL: string;
    CEBS_VERIFICATIONFORM_ISREPORTEDBEFORE: string;
    CEBS_VERIFICATIONFORM_DATEHEALTHTHREATSTARTED: Date;
    CEBS_VERIFICATIONFORM_INFORMANT: string;
    CEBS_VERIFICATIONFORM_OTHERINFORMANT: string;
    CEBS_VERIFICATIONFORM_ADDITIONALINFORMATION: string;
    CEBS_VERIFICATIONFORM_DATEVERIFIED: Date;
    CEBS_VERIFICATIONFORM_ISTHREATSTILLEXISTING: string;
    CEBS_VERIFICATIONFORM_THREATTO: string;
    CEBS_VERIFICATIONFORM_DATESCDSCINFORMED: Date;
    CEBS_VERIFICATIONFORM_VIA: string;
    CEBS_VERIFICATIONFORM_SPOT: string;
    CEBS_VERIFICATIONFORM_CREATEDAT: Date;
    CEBS_VERIFICATIONFORM_UPDATEDAT: Date;

    CEBS_INVESTIGATIONFORM_ID: string;
    CEBS_INVESTIGATIONFORM_USER: string;
    CEBS_INVESTIGATIONFORM_DATESCDSCINFORMED: Date;
    CEBS_INVESTIGATIONFORM_DATEEVENTSTARTED: Date;
    CEBS_INVESTIGATIONFORM_SYMPTOMS: string;
    CEBS_INVESTIGATIONFORM_HUMANCASES: number;
    CEBS_INVESTIGATIONFORM_HUMANCASESHOSPITALIZED: number;
    CEBS_INVESTIGATIONFORM_HUMANSDEAD: number;
    CEBS_INVESTIGATIONFORM_ANIMALSCASES: number;
    CEBS_INVESTIGATIONFORM_ANIMALSDEAD: number;
    CEBS_INVESTIGATIONFORM_ISCAUSEKNOWN: string;
    CEBS_INVESTIGATIONFORM_CAUSE: string;
    CEBS_INVESTIGATIONFORM_ISLABSAMPLESCOLLECTED: string;
    CEBS_INVESTIGATIONFORM_DATESAMPLECOLLECTED: Date;
    CEBS_INVESTIGATIONFORM_LABRESULTS: string;
    CEBS_INVESTIGATIONFORM_DATELABRESULTSRECEIVED: Date;
    CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMINITIALAREA: string;
    CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMNEWAREAS: string;
    CEBS_INVESTIGATIONFORM_ADDITIONALINFORMATION: string;
    CEBS_INVESTIGATIONFORM_RISKCLASSIFICATION: string;
    CEBS_INVESTIGATIONFORM_ISEVENTINFECTIOUS: string;
    CEBS_INVESTIGATIONFORM_EVENTCATEGORIES: string;
    CEBS_INVESTIGATIONFORM_SYSTEMSAFFECTEDBYEVENT: string;
    CEBS_INVESTIGATIONFORM_RESPONSEACTIVITIES: string;
    CEBS_INVESTIGATIONFORM_DATESCMOHINFORMED: Date;
    CEBS_INVESTIGATIONFORM_VIA: string;
    CEBS_INVESTIGATIONFORM_SPOT: string;
    CEBS_INVESTIGATIONFORM_CREATEDAT: Date;
    CEBS_INVESTIGATIONFORM_UPDATEDAT: Date;

    CEBS_RESPONSEFORM_ID: string;
    CEBS_RESPONSEFORM_USER: string;
    CEBS_RESPONSEFORM_EVENTTYPE: string;
    CEBS_RESPONSEFORM_DATESCMOHINFORMED: Date;
    CEBS_RESPONSEFORM_DATERESPONSESTARTED: Date;
    CEBS_RESPONSEFORM_RESPONSEACTIVITIES: string;
    CEBS_RESPONSEFORM_OTHERRESPONSEACTIVITY: string;
    CEBS_RESPONSEFORM_OUTCOMEOFRESPONSE: string;
    CEBS_RESPONSEFORM_RECOMMENDATIONS: string;
    CEBS_RESPONSEFORM_DATEESCALATED: Date;
    CEBS_RESPONSEFORM_DATEOFREPORT: Date;
    CEBS_RESPONSEFORM_ADDITIONALINFORMATION: string;
    CEBS_RESPONSEFORM_VIA: string;
    CEBS_RESPONSEFORM_SPOT: string;
    CEBS_RESPONSEFORM_CREATEDAT: Date;
    CEBS_RESPONSEFORM_UPDATEDAT: Date;

    CEBS_SUMMARYFORM_ID: string;
    CEBS_SUMMARYFORM_USER: string;
    CEBS_SUMMARYFORM_EVENTSTATUS: string;
    CEBS_SUMMARYFORM_ESCALATEDTO: string;
    CEBS_SUMMARYFORM_CAUSE: string;
    CEBS_SUMMARYFORM_VIA: string;
    CEBS_SUMMARYFORM_SPOT: string;
    CEBS_SUMMARYFORM_CREATEDAT: Date;
    CEBS_SUMMARYFORM_UPDATEDAT: Date;

    CEBS_ESCALATIONFORM_ID: string;
    CEBS_ESCALATIONFORM_USER: string;
    CEBS_ESCALATIONFORM_EVENTTYPE: string;
    CEBS_ESCALATIONFORM_DATERESPONSESTARTED: Date;
    CEBS_ESCALATIONFORM_REASON: string;
    CEBS_ESCALATIONFORM_REASONOTHER: string;
    CEBS_ESCALATIONFORM_DATEESCALATED: Date;
    CEBS_ESCALATIONFORM_VIA: string;
    CEBS_ESCALATIONFORM_CREATEDAT: Date;
    CEBS_ESCALATIONFORM_UPDATEDAT: Date;

    id: number;
}

export type DocEbsInput = Optional<DocumentEbsAttributes, 'id'>;


class DocumentEbs
    extends Model<DocumentEbsAttributes>
    implements DocumentEbsAttributes
{
    public USER_ID: string;
    public USER_CREATEDAT: Date;
    public USER_UPDATEDAT: Date;
    public USER_STATUS: string;
    public _ID: string;
    public _STATUS: string;
    public UNIT_ID: string;
    public UNIT_CREATEDAT: Date;
    public UNIT_UPDATEDAT: Date;
    public UNIT_CODE: string;
    public UNIT_UID: string;
    public UNIT_STATE: string;
    public UNIT_TYPE: string;
    public UNIT_SUGGESTIONS: string;
    public UNIT_UNITS: string;
    public UNIT_DATELASTREPORTED_ID: string;
    public UNIT_DATELASTREPORTED_TEST: Date;
    public UNIT_DATELASTREPORTED_LIVE: Date;
    public UNIT_DATELASTREPORTED_UPDATEDAT: Date;
    public UNIT_DATELASTREPORTED_CREATEDAT: Date;
    public UNIT_PARENT_ID: string;
    public UNIT_PARENT_CREATEDAT: Date;
    public UNIT_PARENT_UPDATEDAT: Date;
    public UNIT_PARENT_CODE: string;
    public UNIT_PARENT_UID: string;
    public UNIT_PARENT_PARENT: string;
    public UNIT_PARENT_STATE: string;
    public UNIT_PARENT_TYPE: string;
    public UNIT_PARENT_SUGGESTIONS: string;
    public UNIT_PARENT_UNITS: string;
    public UNIT_PARENT_DATELASTREPORTED_ID: string;
    public UNIT_PARENT_DATELASTREPORTED_TEST: Date;
    public UNIT_PARENT_DATELASTREPORTED_LIVE: Date;
    public UNIT_PARENT_DATELASTREPORTED_UPDATEDAT: Date;
    public UNIT_PARENT_DATELASTREPORTED_CREATEDAT: Date;
    public SIGNALID: string;
    public SIGNAL: string;
    public SUGGESTIONS: string;
    public UNITS: string;
    public CEBS_ID: string;
    public CEBS_CREATEDAT: Date;
    public CEBS_UPDATEDAT: Date;
    public CEBS_VERIFICATIONFORM_ID: string;
    public CEBS_VERIFICATIONFORM_USER: string;
    public CEBS_VERIFICATIONFORM_SOURCE: string;
    public CEBS_VERIFICATIONFORM_DESCRIPTION: string;
    public CEBS_VERIFICATIONFORM_ISMATCHINGSIGNAL: string;
    public CEBS_VERIFICATIONFORM_UPDATEDSIGNAL: string;
    public CEBS_VERIFICATIONFORM_ISREPORTEDBEFORE: string;
    public CEBS_VERIFICATIONFORM_DATEHEALTHTHREATSTARTED: Date;
    public CEBS_VERIFICATIONFORM_INFORMANT: string;
    public CEBS_VERIFICATIONFORM_OTHERINFORMANT: string;
    public CEBS_VERIFICATIONFORM_ADDITIONALINFORMATION: string;
    public CEBS_VERIFICATIONFORM_DATEVERIFIED: Date;
    public CEBS_VERIFICATIONFORM_ISTHREATSTILLEXISTING: string;
    public CEBS_VERIFICATIONFORM_THREATTO: string;
    public CEBS_VERIFICATIONFORM_DATESCDSCINFORMED: Date;
    public CEBS_VERIFICATIONFORM_VIA: string;
    public CEBS_VERIFICATIONFORM_SPOT: string;
    public CEBS_VERIFICATIONFORM_CREATEDAT: Date;
    public CEBS_VERIFICATIONFORM_UPDATEDAT: Date;
    public CEBS_INVESTIGATIONFORM_ID: string;
    public CEBS_INVESTIGATIONFORM_USER: string;
    public CEBS_INVESTIGATIONFORM_DATESCDSCINFORMED: Date;
    public CEBS_INVESTIGATIONFORM_DATEEVENTSTARTED: Date;
    public CEBS_INVESTIGATIONFORM_SYMPTOMS: string;
    public CEBS_INVESTIGATIONFORM_HUMANCASES: number;
    public CEBS_INVESTIGATIONFORM_HUMANCASESHOSPITALIZED: number;
    public CEBS_INVESTIGATIONFORM_HUMANSDEAD: number;
    public CEBS_INVESTIGATIONFORM_ANIMALSCASES: number;
    public CEBS_INVESTIGATIONFORM_ANIMALSDEAD: number;
    public CEBS_INVESTIGATIONFORM_ISCAUSEKNOWN: string;
    public CEBS_INVESTIGATIONFORM_CAUSE: string;
    public CEBS_INVESTIGATIONFORM_ISLABSAMPLESCOLLECTED: string;
    public CEBS_INVESTIGATIONFORM_DATESAMPLECOLLECTED: Date;
    public CEBS_INVESTIGATIONFORM_LABRESULTS: string;
    public CEBS_INVESTIGATIONFORM_DATELABRESULTSRECEIVED: Date;
    public CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMINITIALAREA: string;
    public CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMNEWAREAS: string;
    public CEBS_INVESTIGATIONFORM_ADDITIONALINFORMATION: string;
    public CEBS_INVESTIGATIONFORM_RISKCLASSIFICATION: string;
    public CEBS_INVESTIGATIONFORM_ISEVENTINFECTIOUS: string;
    public CEBS_INVESTIGATIONFORM_EVENTCATEGORIES: string;
    public CEBS_INVESTIGATIONFORM_SYSTEMSAFFECTEDBYEVENT: string;
    public CEBS_INVESTIGATIONFORM_RESPONSEACTIVITIES: string;
    public CEBS_INVESTIGATIONFORM_DATESCMOHINFORMED: Date;
    public CEBS_INVESTIGATIONFORM_VIA: string;
    public CEBS_INVESTIGATIONFORM_SPOT: string;
    public CEBS_INVESTIGATIONFORM_CREATEDAT: Date;
    public CEBS_INVESTIGATIONFORM_UPDATEDAT: Date;
    public CEBS_RESPONSEFORM_ID: string;
    public CEBS_RESPONSEFORM_USER: string;
    public CEBS_RESPONSEFORM_EVENTTYPE: string;
    public CEBS_RESPONSEFORM_DATESCMOHINFORMED: Date;
    public CEBS_RESPONSEFORM_DATERESPONSESTARTED: Date;
    public CEBS_RESPONSEFORM_RESPONSEACTIVITIES: string;
    public CEBS_RESPONSEFORM_OTHERRESPONSEACTIVITY: string;
    public CEBS_RESPONSEFORM_OUTCOMEOFRESPONSE: string;
    public CEBS_RESPONSEFORM_RECOMMENDATIONS: string;
    public CEBS_RESPONSEFORM_DATEESCALATED: Date;
    public CEBS_RESPONSEFORM_DATEOFREPORT: Date;
    public CEBS_RESPONSEFORM_ADDITIONALINFORMATION: string;
    public CEBS_RESPONSEFORM_VIA: string;
    public CEBS_RESPONSEFORM_SPOT: string;
    public CEBS_RESPONSEFORM_CREATEDAT: Date;
    public CEBS_RESPONSEFORM_UPDATEDAT: Date;
    public CEBS_SUMMARYFORM_ID: string;
    public CEBS_SUMMARYFORM_USER: string;
    public CEBS_SUMMARYFORM_EVENTSTATUS: string;
    public CEBS_SUMMARYFORM_ESCALATEDTO: string;
    public CEBS_SUMMARYFORM_CAUSE: string;
    public CEBS_SUMMARYFORM_VIA: string;
    public CEBS_SUMMARYFORM_SPOT: string;
    public CEBS_SUMMARYFORM_CREATEDAT: Date;
    public CEBS_SUMMARYFORM_UPDATEDAT: Date;
    public CEBS_ESCALATIONFORM_ID: string;
    public CEBS_ESCALATIONFORM_USER: string;
    public CEBS_ESCALATIONFORM_EVENTTYPE: string;
    public CEBS_ESCALATIONFORM_DATERESPONSESTARTED: Date;
    public CEBS_ESCALATIONFORM_REASON: string;
    public CEBS_ESCALATIONFORM_REASONOTHER: string;
    public CEBS_ESCALATIONFORM_DATEESCALATED: Date;
    public CEBS_ESCALATIONFORM_VIA: string;
    public CEBS_ESCALATIONFORM_CREATEDAT: Date;
    public CEBS_ESCALATIONFORM_UPDATEDAT: Date;

    public id: number;
}

DocumentEbs.init(
    {
        _ID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        _STATUS: {
            type: DataTypes.STRING,
            allowNull: false
        },
        UNIT_ID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        UNIT_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: false
        },
        UNIT_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: false
        },
        UNIT_CODE: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_UID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_STATE: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_TYPE:  {
            type: DataTypes.STRING,
            allowNull: false
        },
        UNIT_SUGGESTIONS: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        UNIT_UNITS: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_DATELASTREPORTED_ID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_DATELASTREPORTED_TEST: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_DATELASTREPORTED_LIVE: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_DATELASTREPORTED_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_DATELASTREPORTED_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_PARENT_ID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_PARENT_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_PARENT_CODE: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_UID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_PARENT: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_STATE: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_TYPE: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_SUGGESTIONS: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_UNITS: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_DATELASTREPORTED_ID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UNIT_PARENT_DATELASTREPORTED_TEST: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_PARENT_DATELASTREPORTED_LIVE: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_PARENT_DATELASTREPORTED_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UNIT_PARENT_DATELASTREPORTED_CREATEDAT: {
            type: DataTypes.STRING,
            allowNull: true
        },

        USER_ID: {
            type: DataTypes.STRING,
            allowNull: false
        },

        USER_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: false
        },

        USER_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: false
        },

        USER_STATUS: {
            type: DataTypes.STRING,
            allowNull: false 
        },

        
        SIGNALID: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        SIGNAL: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        SUGGESTIONS: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        UNITS: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_ID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        CEBS_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: true
        },
        CEBS_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true
        },
        CEBS_VERIFICATIONFORM_ID: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_USER: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_SOURCE: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_DESCRIPTION: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_ISMATCHINGSIGNAL: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_UPDATEDSIGNAL: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_ISREPORTEDBEFORE: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_DATEHEALTHTHREATSTARTED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_INFORMANT: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_OTHERINFORMANT: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_ADDITIONALINFORMATION: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_DATEVERIFIED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_ISTHREATSTILLEXISTING: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_THREATTO: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_DATESCDSCINFORMED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_VIA: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_SPOT: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_VERIFICATIONFORM_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ID: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_USER: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_DATESCDSCINFORMED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_DATEEVENTSTARTED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_SYMPTOMS: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_HUMANCASES: {
            type: DataTypes.INTEGER,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_HUMANCASESHOSPITALIZED: {
            type: DataTypes.INTEGER,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_HUMANSDEAD: {
            type: DataTypes.INTEGER,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ANIMALSCASES: {
            type: DataTypes.INTEGER,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ANIMALSDEAD: {
            type: DataTypes.INTEGER,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ISCAUSEKNOWN: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_CAUSE: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ISLABSAMPLESCOLLECTED: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_DATESAMPLECOLLECTED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_LABRESULTS: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_DATELABRESULTSRECEIVED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMINITIALAREA: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMNEWAREAS: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ADDITIONALINFORMATION: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_RISKCLASSIFICATION: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_ISEVENTINFECTIOUS: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_EVENTCATEGORIES: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_SYSTEMSAFFECTEDBYEVENT: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_RESPONSEACTIVITIES: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_DATESCMOHINFORMED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_VIA: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_SPOT: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_INVESTIGATIONFORM_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_ID: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_USER: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_EVENTTYPE: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_DATESCMOHINFORMED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_DATERESPONSESTARTED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_RESPONSEACTIVITIES: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_OTHERRESPONSEACTIVITY: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_OUTCOMEOFRESPONSE: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_RECOMMENDATIONS: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_DATEESCALATED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_DATEOFREPORT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_ADDITIONALINFORMATION: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_VIA: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_SPOT: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_RESPONSEFORM_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_ID: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_USER: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_EVENTSTATUS: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_ESCALATEDTO: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_CAUSE: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_VIA: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_SPOT: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_SUMMARYFORM_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_ID: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_USER: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_EVENTTYPE: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_DATERESPONSESTARTED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_REASON: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_REASONOTHER: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_DATEESCALATED: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_VIA: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_CREATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        CEBS_ESCALATIONFORM_UPDATEDAT: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
        
    },
    {
        tableName: 'central-raw-ebs-linelist',
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        sequelize: db,
        indexes: [{
            fields: ['_ID'],
            unique: true
        }],
    }
);

export default DocumentEbs;
