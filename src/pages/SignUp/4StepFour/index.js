import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Success from '~/components/Success';
import Error from '~/components/Error';
import Loading from '~/components/Loading';

import { signUpRequest } from '~/store/modules/auth/actions';

import { Title, Messages, Message } from '../styles';

export default function StepFour() {
  const dispatch = useDispatch();

  const newUser = useSelector((state) => state.user.newUser);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

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
        {/* <img src="https://i.imgur.com/GwStPmg.png" alt="" /> */}
        {loading && (
          <>
            <strong>Enviando dados cadastrais...</strong>
            <Message>
              <Loading />
              <div>
                <span>
                  Aguarde estamos enviando sua inscrição para o servidor!
                </span>
              </div>
            </Message>
          </>
        )}
        {!loading && !error && (
          <>
            <strong>Sucesso !</strong>
            <Message>
              <Success />
              <div>
                <span>
                  Sua inscrição foi encaminhada para o setor de análise!
                </span>
              </div>
            </Message>
          </>
        )}
        {!loading && error && (
          <>
            <strong>Ooops !</strong>
            <Message>
              <Error />
              <div>
                <span>
                  Oops..! Não foi possível enviar seus dados para análise
                  cadastral!
                </span>
              </div>
            </Message>
          </>
        )}
      </Messages>
    </>
  );
}
