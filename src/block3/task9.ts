type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object
        ? T[K]
        : T[K] extends object 
        ? DeepReadonly<T[K]> 
        : T[K];
};

function deepFreeze<T>(obj: T): DeepReadonly<T> {
    Object.freeze(obj);
    
    Object.getOwnPropertyNames(obj).forEach(prop => {
        const value = (obj as any)[prop];
        
        if (value !== null && typeof value === 'object') {
            deepFreeze(value);
        }
    });

    return obj as DeepReadonly<T>;
}

const user = {
    name: 'Abobkin',
    age: 30,
    settings: {
        theme: 'dark',
        preferences: {
            language: 'ru',
            notifications: true
        },
        tags: ['admin', 'editor', 'user'],
    },
    friends: [
        { name: 'Biba', settings: { theme: 'light' } },
        { name: 'Boba', settings: { theme: 'blue' } }
    ]
};

const frozen = deepFreeze(user);

console.log('Root Properties Test:');
try {
    // Узнал что это помогает обойти ошибки и запустить компиляцию
    // Использую только для демонстрации
    // @ts-expect-error 
    frozen.name = 'Bob';
    console.log('   FAIL');
} catch (e) {
    console.log('   PASS');
}

console.log('Testing Nested Objects:');
try {
    frozen.settings.theme = 'light';
    console.log('   FAIL');
} catch (e) {
    console.log('   PASS');
}

console.log('Deep Nesting Test:');
try {
    frozen.settings.preferences.language = 'en';
    console.log('   FAIL');
} catch (e) {
    console.log('   PASS');
}

console.log('Array Test:');
try {
    frozen.settings.tags.push('moderator');
    console.log('   FAIL');
} catch (e) {
    console.log('   PASS');
}

console.log('Object Array Test:');
try {
    // @ts-expect-error
    frozen.friends[0].name = '';
    console.log('   FAIL');
} catch (e) {
    console.log('   PASS');
}

console.log('Data Reading Test:');
console.log(`   name: ${frozen.name}`);
console.log(`   theme: ${frozen.settings.theme}`);
console.log(`   language: ${frozen.settings.preferences.language}`);
console.log(`   tags: ${frozen.settings.tags.join(', ')}`);
console.log(`   friends: ${frozen.friends.map(f => f.name).join(', ')}`);
