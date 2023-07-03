async function nameToUUID(name) {
    const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    const data = await res.json();
    return data?.id;
}

export { nameToUUID };
