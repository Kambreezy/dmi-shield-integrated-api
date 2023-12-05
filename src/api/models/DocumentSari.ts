import { Model, Optional, DataTypes } from 'sequelize';
import { db } from '../../database/config';
import User from './user';

interface DocumentSariAttributes {
    id: number;
    userId?: number;
    PatientID: string;
    Datescreened: string;
    EnrolmentDate: string;
    Eligible: string;
    Enrolled: string;
    F_NAME: string;
    Age: string;
    Sex: string;
    Dateonset: string;
    casedef: string;
    chronic: string;
    flutest: string;
    covidtest: string;
    Dateassesment: string;
    outcome: string;
    colldate: string;
    samplecollected: string;
    sampletested: string;
    datetested: string;
    flupos: string;
    fluapos: string;
    h3n2: string;
    ph1n1: string;
    unsub_non: string;
    notsubtyp: string;
    flubpos: string;
    yamagata: string;
    victoria: string;
    flub_undetermined: string;
    covidpos: string;
    county: string;
    Facility_site: string;
    Longitude: string;
    Latitude: string;
    createdAt?: Date;
}

export type DocSariInput = Optional<DocumentSariAttributes, 'id'>;
export type DocSariOutput = Optional<
    DocumentSariAttributes,
    'id' | 'createdAt'
>;

class DocumentSari
    extends Model<DocumentSariAttributes, DocSariInput>
    implements DocumentSariAttributes
{
    id!: number;
    userId!: number;
    Age: string;
    Dateassesment: string;
    Dateonset: string;
    Datescreened: string;
    Eligible: string;
    Enrolled: string;
    EnrolmentDate: string;
    F_NAME: string;
    Facility_site: string;
    Latitude: string;
    Longitude: string;
    PatientID: string;
    Sex: string;
    casedef: string;
    chronic: string;
    colldate: string;
    county: string;
    covidpos: string;
    covidtest: string;
    createdAt: Date;
    datetested: string;
    fluapos: string;
    flub_undetermined: string;
    flubpos: string;
    flupos: string;
    flutest: string;
    h3n2: string;
    notsubtyp: string;
    outcome: string;
    ph1n1: string;
    samplecollected: string;
    sampletested: string;
    unsub_non: string;
    victoria: string;
    yamagata: string;
}

DocumentSari.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Age: {
            type: DataTypes.STRING
        },
        Dateassesment: {
            type: DataTypes.STRING
        },
        Dateonset: {
            type: DataTypes.STRING
        },
        Datescreened: {
            type: DataTypes.STRING
        },
        Eligible: {
            type: DataTypes.STRING
        },
        Enrolled: {
            type: DataTypes.STRING
        },
        EnrolmentDate: {
            type: DataTypes.STRING
        },
        F_NAME: {
            type: DataTypes.STRING
        },
        Facility_site: {
            type: DataTypes.STRING
        },
        Latitude: {
            type: DataTypes.STRING
        },
        Longitude: {
            type: DataTypes.STRING
        },
        PatientID: {
            type: DataTypes.STRING
        },
        Sex: {
            type: DataTypes.STRING
        },
        casedef: {
            type: DataTypes.STRING
        },
        chronic: {
            type: DataTypes.STRING
        },
        colldate: {
            type: DataTypes.STRING
        },
        county: {
            type: DataTypes.STRING
        },
        covidpos: {
            type: DataTypes.STRING
        },
        covidtest: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        datetested: {
            type: DataTypes.STRING
        },
        fluapos: {
            type: DataTypes.STRING
        },
        flub_undetermined: {
            type: DataTypes.STRING
        },
        flubpos: {
            type: DataTypes.STRING
        },
        flupos: {
            type: DataTypes.STRING
        },
        flutest: {
            type: DataTypes.STRING
        },
        h3n2: {
            type: DataTypes.STRING
        },
        notsubtyp: {
            type: DataTypes.STRING
        },
        outcome: {
            type: DataTypes.STRING
        },
        ph1n1: {
            type: DataTypes.STRING
        },
        samplecollected: {
            type: DataTypes.STRING
        },
        sampletested: {
            type: DataTypes.STRING
        },
        unsub_non: {
            type: DataTypes.STRING
        },
        victoria: {
            type: DataTypes.STRING
        },
        yamagata: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'documentsari',
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        sequelize: db
    }
);

DocumentSari.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

export default DocumentSari;
