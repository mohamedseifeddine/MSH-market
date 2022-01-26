/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'
import {
  borderRadius,
  height,
  width,
  space,
  fontSize,
  fontWeight,
  border,
} from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

const getWidth = ({ wide }) => wide === 'true' && '100%'
const btnBg = ({ bgColor, skin }) =>
  themeGet(
    skin === 'outline' ? 'transparent' : `colors.${bgColor}`,
    'colors.white'
  )
const btnColor = ({ color, skin }) =>
  themeGet(skin === 'fill' ? `colors.${color}` : 'colors.primary')
const getBorder = ({ skin }) => (skin === 'fill' ? 'solid 1px' : 'none')

const getStyles = (htmlType) => styled[htmlType]`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  outline: none;
  user-select: none;
  ${fontWeight};
  width: ${getWidth};
  ${width};
  color: ${btnColor};
  background: ${btnBg};
  padding: 1rem 2.3rem;
  line-height: 1.5;
  ${height};
  ${borderRadius};
  ${space};
  border: ${getBorder};
  ${border};
  transition: all 0.4s;
  font-family: ${themeGet('fontFamilies.primary')};
  font-size: var(--fz-md);
  ${fontSize};

  ${({ disabled }) =>
    !disabled
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: not-allowed;
          filter: grayscale(0.8);
        `}

  ${({ skin }) =>
    skin === 'outline' &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}

  ${({ animated }) =>
    animated &&
    css`
      box-shadow: rgb(0 0 0 / 20%) 0 0.1rem 0.2rem 0;
      &:hover {
        transform: translateY(-0.1rem);
        box-shadow: rgb(0 0 0 / 20%) 0 0.3rem 0.5rem 0;
      }
      &:active {
        transform: translate(0);
        box-shadow: rgb(0 0 0 / 20%) 0 0.1rem 0.2rem 0;
      }
    `}
`

const StyledButton = getStyles('button')
const StyledLink = getStyles('a')

const Button = (props) => {
  const { to, wide, disabled, withAnimation, children, ...rest } = props
  const isWide = wide.toString()

  if (to) {
    return (
      <StyledLink
        disabled={disabled}
        wide={isWide}
        animated={withAnimation}
        {...rest}
        href={to}
      >
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledButton
      disabled={disabled}
      wide={isWide}
      animated={withAnimation}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'black',
  skin: 'fill',
  type: 'button',
  disabled: false,
  wide: false,
  borderRadius: 0,
  padding: 0,
  withAnimation: false,
  bgColor: 'white',
}
export default Button
