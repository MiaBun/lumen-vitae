LootJS.modifiers((event) => {
    event.addBlockLootModifier("regions_unexplored:maple_leaves").replaceLoot("regions_unexplored:maple_sapling", "biomeswevegone:maple_sapling");
    // or .replaceLoot("minecraft:flint", "minecraft:diamond", true) if you want to preserve the stack size
});