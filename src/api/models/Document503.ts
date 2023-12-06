import { Model, Optional, DataTypes } from 'sequelize';
// import User from './user';
import { db } from '../../database/config';
import User from './User';

interface Document503Attributes {
    id: number;
    userId?: number;
    Index: number;
    TIMESTAMP: string;
    NAME: string;
    CONTACT: string;
    SEX: string;
    'AGE if 12 months 0': string;
    'COUNTRY OF RESIDENCE': string;
    'COUNTY OF RESIDENCE WITHIN KENYA': string;
    'REPORTING COUNTY': string;
    'REPORTING SUB COUNTY': string;
    'REPORTING WARD': string;
    'REPORTING VILLAGE TOWNCAMP': string;
    VACCINATED: string;
    'VACCINE DOSES': string;
    'ATTENDED HEALTH FACILITY YN': string;
    'DATE ATTENDED HEALTH FACILITY ddmmyyyy': string;
    'DATE OF SYMPTOM ONSET ddmmyyyy': string;
    'HEALTH FACILITY NAME lower case only': string;
    'DEHYDRATION AT ARRIVAL': string;
    'RDT RESULT': string;
    'CULTURE RESULT': string;
    'LAB CONFIRMATION DATE ddmmyyyy': string;
    'LAB NAME': string;
    'LAB SITE': string;
    SEROTYPE: string;
    'OUTIN PATIENT STATUS': string;
    OUTCOME: string;
    'DATE OF DISCHARGE ddmmyyyy': string;
    'DATE OF DEATH ddmmyyyy': string;
    'PLACE OF DEATH': string;
    'PREVIOUS HISTORY Epi linked to a confirmed case': string;
    'Comments please provide any other relevant details about the case eg travel history venue symptoms etc': string;
    AgeGroup: string;
    createdAt?: Date;
}

export type Doc503Input = Optional<Document503Attributes, 'id'>;
export type Doc503Output = Optional<Document503Attributes, 'id' | 'createdAt'>;

class Document503
    extends Model<Document503Attributes, Doc503Input>
    implements Document503Attributes
{
    public 'AGE if 12 months 0': string;
    public 'ATTENDED HEALTH FACILITY YN': string;
    public 'COUNTRY OF RESIDENCE': string;
    public 'COUNTY OF RESIDENCE WITHIN KENYA': string;
    public 'CULTURE RESULT': string;
    public 'Comments please provide any other relevant details about the case eg travel history venue symptoms etc': string;
    public 'DATE ATTENDED HEALTH FACILITY ddmmyyyy': string;
    public 'DATE OF DEATH ddmmyyyy': string;
    public 'DATE OF DISCHARGE ddmmyyyy': string;
    public 'DATE OF SYMPTOM ONSET ddmmyyyy': string;
    public 'DEHYDRATION AT ARRIVAL': string;
    public 'HEALTH FACILITY NAME lower case only': string;
    public 'LAB CONFIRMATION DATE ddmmyyyy': string;
    public 'LAB NAME': string;
    public 'LAB SITE': string;
    public 'OUTIN PATIENT STATUS': string;
    public 'PLACE OF DEATH': string;
    public 'PREVIOUS HISTORY Epi linked to a confirmed case': string;
    public 'RDT RESULT': string;
    public 'REPORTING COUNTY': string;
    public 'REPORTING SUB COUNTY': string;
    public 'REPORTING VILLAGE TOWNCAMP': string;
    public 'REPORTING WARD': string;
    public 'VACCINE DOSES': string;
    public AgeGroup!: string;
    public CONTACT!: string;
    public Index!: number;
    public NAME!: string;
    public OUTCOME!: string;
    public SEROTYPE!: string;
    public SEX!: string;
    public TIMESTAMP!: string;
    public VACCINATED!: string;
    public userId!: number;
    public id!: number;
}

Document503.init(
    {
        'AGE if 12 months 0': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'ATTENDED HEALTH FACILITY YN': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'COUNTRY OF RESIDENCE': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'COUNTY OF RESIDENCE WITHIN KENYA': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'CULTURE RESULT': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'Comments please provide any other relevant details about the case eg travel history venue symptoms etc':
            {
                type: DataTypes.STRING,
                allowNull: true
            },
        'DATE ATTENDED HEALTH FACILITY ddmmyyyy': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'DATE OF DEATH ddmmyyyy': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'DATE OF DISCHARGE ddmmyyyy': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'DATE OF SYMPTOM ONSET ddmmyyyy': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'DEHYDRATION AT ARRIVAL': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'HEALTH FACILITY NAME lower case only': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'LAB CONFIRMATION DATE ddmmyyyy': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'LAB NAME': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'LAB SITE': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'OUTIN PATIENT STATUS': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'PLACE OF DEATH': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'PREVIOUS HISTORY Epi linked to a confirmed case': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'RDT RESULT': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'REPORTING COUNTY': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'REPORTING SUB COUNTY': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'REPORTING VILLAGE TOWNCAMP': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'REPORTING WARD': {
            type: DataTypes.STRING,
            allowNull: true
        },
        'VACCINE DOSES': {
            type: DataTypes.STRING,
            allowNull: true
        },
        AgeGroup: {
            type: DataTypes.STRING,
            allowNull: true
        },
        CONTACT: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Index: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        NAME: {
            type: DataTypes.STRING,
            allowNull: true
        },
        OUTCOME: {
            type: DataTypes.STRING,
            allowNull: true
        },
        SEROTYPE: {
            type: DataTypes.STRING,
            allowNull: true
        },
        SEX: {
            type: DataTypes.STRING,
            allowNull: true
        },
        TIMESTAMP: {
            type: DataTypes.STRING,
            allowNull: true
        },
        VACCINATED: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        tableName: 'document503',
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        sequelize: db
    }
);

Document503.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

export default Document503;
