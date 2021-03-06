import React from 'react'

const TwitterShare = ({ platform = 'iOS' }) => {
  const tweet = `https://twitter.com/intent/tweet?&text=I just completed this GraphQL course for ${platform} developers by @HasuraHQ. Check it out here - https://hasura.io/learn/graphql/ios`
  return (
    <React.Fragment>
      <a href={tweet} target="_blank" rel="noopener noreferrer">
        <img className={'twitterIcon'} src={'https://img.icons8.com/color/48/000000/twitter.png'} alt={'Twitter'} />
      </a>
    </React.Fragment>
  )
}

export default TwitterShare
