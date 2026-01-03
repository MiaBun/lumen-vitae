ServerEvents.recipes(event => {

    event.remove({ id: 'sophisticatedbackpacks:inception_upgrade' })

    event.shaped(
        Item.of('sophisticatedbackpacks:inception_upgrade', 1),
        [
            'ABA',
            'BAB',
            'ABA'
        ],
        {
            A: 'sophisticatedbackpacks:stack_upgrade_omega_tier',
            B: 'minecraft:nether_star'
        }
    )
})