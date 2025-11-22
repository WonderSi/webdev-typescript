interface Repository<T> {
    create(item: T): void;
    findById(id: string): T | undefined;
    update(id: string, updates: Partial<T>): boolean;
    delete(id: string): boolean; 
};

class MemoryRepository<T extends { id: string }> implements Repository<T> {
    private storage = new Map<string, T>();

    create(item: T): void {
        if (this.storage.has(item.id)) {
            throw new Error(`Entity with id ${item.id} already exists`);
        };

        this.storage.set(item.id, { ...item });
    };

    findById(id: string): T | undefined {
        if (!id) {
            throw new Error(`Id cannot be empty`);
        };

        return this.storage.get(id);
    };

    update(id: string, updates: Partial<T>): boolean {
        if (!id) {
            throw new Error(`Id cannot be empty`);
        };

        const item = this.storage.get(id);
        if (!item) return false;
        this.storage.set(id, { ...item, ...updates });
        return true;
    };

    delete(id: string): boolean {
        if (!id) {
            throw new Error(`Id cannot be empty`);
        };

        return this.storage.delete(id);
    };
};

type Book = {
    id: string;
    title: string;
    author: string;
    year: number;
}

const bookRepo = new MemoryRepository<Book> ();

try {
    console.log('Create');
    bookRepo.create({
        id: "1",
        title: "Object-Oriented Design Patterns",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        year: 2021
    });
    bookRepo.create({
        id: "2",
        title: "Think like a programmer",
        author: "Anton Sprol",
        year: 2018
    });

    console.log('Find');
    const book = bookRepo.findById("1");
    console.log('Found: ', book);

    console.log('Update');
    const isUpdated = bookRepo.update("1", { year: 2025 });
    console.log('Updated success: ', isUpdated);
    console.log('New state: ', bookRepo.findById("1"));

    console.log('Delete');
    const isDelete = bookRepo.delete("1");
    console.log('Deleted success: ', isDelete);
    console.log('Try find deleted: ', bookRepo.findById("1"));
} catch (e) {
    console.error(e);
}
