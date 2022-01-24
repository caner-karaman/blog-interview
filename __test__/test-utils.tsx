import React, {FC, ReactElement, useState} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import '@testing-library/jest-dom';
import {ThemeProvider} from 'styled-components'
import { theme } from '../common/theme'

const useRouter = jest.spyOn(require("next/router"), "useRouter");
export function mockNextUseRouter(props: {
  route: string;
  pathname: string;
  query: string;
  asPath: string;
}) {
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
  }));
}

const AllTheProviders: FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'

export {customRender as render}