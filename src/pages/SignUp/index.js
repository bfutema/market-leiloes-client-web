import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ink from 'react-ink';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import { newCandidate } from '~/store/modules/user/actions';

import animationData from '~/assets/21682-workflow.json';
import logo from '~/assets/logo-light.svg';

import {
  Container,
  NewCandidateContainer,
  NewCandidate,
  LogoContainer,
  HeroContainer,
  ButtonsContainer,
  NextButtonContainer,
  Content,
  Steps,
  ProgressBar,
} from './styles';

import StepOne from './1StepOne';
import StepTwo from './2StepTwo';
import StepThree from './3StepThree';
import StepFour from './4StepFour';

function SignUp() {
  const newUser = useSelector((state) => state.user.newUser);

  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);

  const [progressBar, setProgressBar] = useState(25);
  const [currentStep, setCurrentFs] = useState(0);

  const [accountType, setAccountType] = useState(undefined);

  function handleNext() {
    setCurrentFs(currentStep + 1);
    setProgressBar(progressBar + 25);
  }

  function handlePrev(step = undefined, progress = undefined) {
    if (step && progress) {
      setCurrentFs(currentStep - step);
      setProgressBar(progressBar - progress);
    } else {
      setCurrentFs(currentStep - 1);
      setProgressBar(progressBar - 25);
    }
  }

  function handleProceed(e) {
    const { value } = e.target;

    setAccountType(value);

    if (!accountType) {
      toast.info('Por favor, selecione a sua pretenção.');
      return;
    }

    setCurrentFs(currentStep + 1);
    dispatch(newCandidate(accountType));
  }

  return (
    <>
      {currentStep === 0 ? (
        <NewCandidateContainer>
          <NewCandidate>
            <LogoContainer>
              <img src={logo} alt="MARKET Leilões" />
              <h3>
                A plataforma perfeita para prevenção à perda de produtos
                perecíveis.
              </h3>
              <p>
                Em casos de produtos pertos do vencimento opte por expor para
                arremates online com alta praticidez e agilidade.
              </p>
              <p>
                Escolha abaixo sua pretenção com os nossos serviços para que
                possamos oferecer uma melhor experiência possível.
                {accountType === 'bidder' && (
                  <span>
                    Os arrematantes em nossa plataforma poderá visualizar todos
                    os produtos disponíveis para arremate.
                  </span>
                )}
                {accountType === 'client' && (
                  <span>
                    Ao escolher a prevenção de seus produtos será possível
                    gerenciar a prevenção à perda de seus produtos e em casos de
                    perdas expor para arremates online.
                  </span>
                )}
              </p>
            </LogoContainer>
            <HeroContainer>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                height={340}
                width={520}
              />
            </HeroContainer>
            <ButtonsContainer accountType={accountType}>
              <label>Escolha sua pretenção:</label>
              <div>
                <button type="button" onClick={() => setAccountType('bidder')}>
                  <Ink />
                  Arrematar produtos
                </button>
                <button type="button" onClick={() => setAccountType('client')}>
                  <Ink />
                  Prevenção aos meus produtos
                </button>
              </div>
            </ButtonsContainer>
            <NextButtonContainer>
              <button type="button" onClick={handleProceed}>
                <Ink />
                Prosseguir com o cadastro
                <FiArrowRight color={theme.colors.white} size={16} />
              </button>
            </NextButtonContainer>
          </NewCandidate>
        </NewCandidateContainer>
      ) : (
        <Container>
          <h1>Criar sua conta de usuário</h1>
          <p>
            Preencha todos os campos do formulário para ir para a próxima etapa
          </p>
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
              <StepThree
                avatar={newUser && newUser.avatar}
                documents={newUser && newUser.documents}
                handlePrev={handlePrev}
                handleNext={handleNext}
              />
            </fieldset>
            {currentStep === 4 && (
              <fieldset>
                <StepFour handlePrev={handlePrev} />
              </fieldset>
            )}
          </Content>
        </Container>
      )}
    </>
  );
}

export default SignUp;
