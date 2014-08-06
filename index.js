var elasticsearch = require('elasticsearch');

/**
 * Export the Elasticsearch class.
 */

module.exports = ElasticsearchConnector;

/**
 * Create an instance of the connector with the given `settings`.
 */

function ElasticsearchConnector(settings) {
  assert(typeof settings === 'object', 'cannot initialize MailConnector without a settings object');
}

ElasticsearchConnector.initialize = function(dataSource, callback) {
  dataSource.connector = new elasticsearch.Client(dataSource.settings);
  callback();
};
