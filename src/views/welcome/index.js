import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import withLayout from 'hoc/withLayout';
import { fetchProfile } from 'actions/profile';
import { compose } from 'recompose';
import { selectUserProfile } from 'selectors/profile';

 class Welcome extends Component {
   componentDidMount () {
    const { fetchProfile } = this.props;
    fetchProfile();
   }
  render () {
    const { user } = this.props;
    return (
      <section>
        WELCOME {user.getIn(['name', 'first'])}
        <Link to='/account'>Account</Link>
      </section>
    )
  }
}

const allActions = {
  fetchProfile
}

const mapStateToProps = ({ profile }) => {
  const loading = profile.get('loadingProfile', false);
  return {
    user: selectUserProfile(profile),
    loading
  };
};

export default compose(
  withLayout,
  connect(mapStateToProps, allActions)
)(Welcome);
