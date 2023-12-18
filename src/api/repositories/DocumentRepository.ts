import Document503, { Doc503Input, Doc503Output } from '../models/Document503';
import DocumentSari, {
    DocSariInput,
    DocSariOutput
} from '../models/DocumentSari';

interface IDocumentRepository {
    createDocument(payload: Doc503Input): Promise<Doc503Output>;
    // getRoles(): Promise<RoleOutput[]>;
    // getRoleBySlug(slug: string): Promise<RoleOutput | null>;
}

class DocumentRepository implements IDocumentRepository {
    createDocument(payload: Doc503Input): Promise<Doc503Output> {
        return Document503.create(payload);
    }

    createSariDocument(payload: DocSariInput): Promise<DocSariOutput> {
        return DocumentSari.create(payload);
    }
}

export default new DocumentRepository();
