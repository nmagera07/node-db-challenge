exports.seed = function(knex) {
      return knex('resources').insert([
        { resource_name: 'resource1', resource_description: 'description of resource1' },
        { resource_name: 'resource2', resource_description: 'description of resource2' },
        { resource_name: 'resource3', resource_description: 'description of resource3' },
        { resource_name: 'resource4', resource_description: 'description of resource4' },
        { resource_name: 'resource5', resource_description: 'description of resource5' },
        { resource_name: 'resource6', resource_description: 'description of resource6' },

      ]);
};
