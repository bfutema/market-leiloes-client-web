import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Lottie from 'react-lottie';
import animationData from '~/assets/433-checked-done.json';

import { signUpRequest } from '~/store/modules/auth/actions';

import { Title, Messages, Message } from '../styles';

export default function StepFour() {
  const dispatch = useDispatch();

  const newUser = useSelector((state) => state.user.newUser);

  useEffect(() => {
    dispatch(signUpRequest(newUser));
  }, [dispatch, newUser]);

  return (
    <>
      <Title>
        <span>Candidatura enviada com sucesso: </span>
        <span>Etapa 4 - 4</span>
      </Title>
      <Messages>
        <strong>Sucesso !</strong>
        <Message>
          {/* <img src="https://i.imgur.com/GwStPmg.png" alt="" /> */}
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={300}
            width={400}
          />
          <div>
            <span>Sua inscrição foi encaminhada para o setor de análise!</span>
          </div>
        </Message>
      </Messages>
    </>
  );
}
