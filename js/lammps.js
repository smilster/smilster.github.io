hljs.registerLanguage('lammps', function() {
    const COMMANDS = [
        'units', 'atom_style', 'pair_style', 'pair_coeff', 'bond_style', 'bond_coeff',
        'angle_style', 'angle_coeff', 'dihedral_style', 'dihedral_coeff', 'improper_style', 'improper_coeff',
        'read_data', 'read_restart', 'write_data', 'write_restart', 'minimize', 'run', 'velocity',
        'fix', 'unfix', 'compute', 'region', 'group', 'variable', 'thermo', 'thermo_style',
        'dump', 'undump', 'restart', 'include', 'neighbor', 'neigh_modify', 'mass', 'timestep',
        'min_style', 'kspace_style', 'kspace_modify', 'reset_timestep', 'create_box', 'create_atoms',
        'delete_atoms', 'delete_bonds', 'replicate', 'lattice', 'boundary', 'log', 'if', 'else', 'label', 'jump'
    ];

    const KEYWORDS = [
        'equal', 'atom', 'molecule', 'all', 'default', 'lj/cut', 'lj/cut/coul/long',
        'eam', 'npt', 'nvt', 'nve', 'langevin', 'iso', 'aniso', 'temp', 'press', 'x', 'y', 'z'
    ];

    return {
        name: 'LAMMPS',
        aliases: ['lmp', 'lammps'],
        case_insensitive: true,
        contains: [
            // Comments
            {
                className: 'comment',
                begin: /#/,
                end: /$/,
            },
            // Strings
            {
                className: 'string',
                begin: /"/, end: /"/
            },
            {
                className: 'string',
                begin: /'/, end: /'/
            },
            // Variables: ${var} or v_name
            {
                className: 'variable',
                variants: [
                    { begin: /\$\{[A-Za-z_]\w*\}/ },
                    { begin: /\bv_[A-Za-z_]\w*\b/ }
                ]
            },
            // Numbers
            {
                className: 'number',
                begin: /\b\d+(\.\d+)?(e[-+]?\d+)?\b/i
            },
            // Commands (highlight as keywords)
            {
                className: 'keyword',
                begin: '\\b(' + COMMANDS.join('|') + ')\\b'
            },
            // Arguments / modifiers
            {
                className: 'built_in',
                begin: '\\b(' + KEYWORDS.join('|') + ')\\b'
            }
        ]
    };
});