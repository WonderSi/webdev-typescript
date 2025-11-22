type ReadonlyTags = readonly string[];

const addTag = (tags: ReadonlyTags, tagToAdd: string): ReadonlyTags => {
    return [...tags, tagToAdd];
};

const removeTag = (tags: ReadonlyTags, tagToRemove: string): ReadonlyTags => {
    return tags.filter(tag => { return tag !== tagToRemove });
};

const mergeTags = (tags1: ReadonlyTags, tags2: ReadonlyTags): ReadonlyTags => {
    return [...tags1, ...tags2];
};

const tags: ReadonlyTags = ['vue', 'typescript', 'pinia', 'eslint'];
console.log(`Initial: ${tags}`);

const tagToAdd = 'docker';
console.log(`Added tag '${tagToAdd}': ${addTag(tags, tagToAdd)}`);

const tagToRemove = 'eslint';
console.log(`Remove tag '${tagToRemove}': ${removeTag(tags, tagToRemove)}`);

const tags2: ReadonlyTags = ['node', 'html', 'javascript', 'css']
console.log(`Merged tags '${tags2}': ${mergeTags(tags, tags2)}`)
