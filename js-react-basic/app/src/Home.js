import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      'tweets': []
    };
    this.tweetFetched = this.tweetFetched.bind(this)
    this.tweetFetchFailed = this.tweetFetchFailed.bind(this)
  }
  tweetFetched(data) {
    this.setState({ ...this.state, tweets: [ ...this.state.tweets, ...data ]});
  }
  tweetFetchFailed(e) {
    console.log('Fetching failed');
    console.log(e);
  }
  componentDidMount() {
    window.hasura.data.query({
      type: 'select',
      args: {
        table: 'tweet',
        columns: ['*']
      }},
      this.tweetFetched,
      this.tweetFetchFailed 
    );
  }
  render() {

    const tweetsHtml = this.state.tweets.map(( t, i ) => {
      return (
        <li key={ i }>
          { t.tweet_message }
        </li>
      );
    });
    return (
      <div>
        <h2>Get started with Hasura</h2>
        <div>
          <h3>
            Tweets
          </h3>
          <ul>
            { tweetsHtml}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
