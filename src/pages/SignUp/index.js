import React, { useState } from 'react';

import { Container, Content, Steps, ProgressBar } from './styles';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

function SignUp() {
  const [progressBar, setProgressBar] = useState(25);
  const [currentStep, setCurrentFs] = useState(1);

  function handleNext() {
    setCurrentFs(currentStep + 1);
    setProgressBar(progressBar + 25);
  }

  function handlePrev() {
    setCurrentFs(currentStep - 1);
    setProgressBar(progressBar - 25);
  }

  return (
    <Container>
      <h1>Criar sua conta de usuário</h1>
      <p>Preencha todos os campos do formulário para ir para a próxima etapa</p>
      <Content fieldsetActive={currentStep}>
        <Steps id="progressbar">
          <li id="account" className={currentStep >= 1 ? 'active' : ''}>
            <strong>Conta</strong>
          </li>
          <li id="personal" className={currentStep >= 2 ? 'active' : ''}>
            <strong>Pessoal</strong>
          </li>
          <li id="documents" className={currentStep >= 3 ? 'active' : ''}>
            <strong>Documentos</strong>
          </li>
          <li id="confirm" className={currentStep >= 4 ? 'active' : ''}>
            <strong>Finalizar</strong>
          </li>
        </Steps>
        <ProgressBar className="progress" width={progressBar}>
          <div
            className={`progress-bar ${
              currentStep !== 4 && 'progress-bar-striped'
            } progress-bar-animated`}
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </ProgressBar>
        <fieldset className={currentStep === 1 ? 'active' : 'hide'}>
          <StepOne handleNext={handleNext} />
        </fieldset>
        <fieldset className={currentStep === 2 ? 'active' : 'hide'}>
          <StepTwo handlePrev={handlePrev} handleNext={handleNext} />
        </fieldset>
        <fieldset className={currentStep === 3 ? 'active' : 'hide'}>
          <StepThree handlePrev={handlePrev} handleNext={handleNext} />
        </fieldset>
        {currentStep === 4 && (
          <fieldset>
            <StepFour />
          </fieldset>
        )}
      </Content>
    </Container>
  );
}

export default SignUp;
