import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles'

const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;





// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import {
//   auth,
//   signInWithGooglePopup,
//   createUserProfileDocument,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth
// } from '../../utils/firebase/firebase.utils';
