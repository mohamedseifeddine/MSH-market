import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  width,
  height,
  space,
  fontSize,
  borderRadius,
  background,
} from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

const StyledInput = styled.input`
 ${width};
 ${height};
 ${fontSize};
 ${borderRadius};
 ${background};
 display: inline-block;
 vertical-align: middle;
 padding: 1.6rem;
 border-width: 0.1rem;
 outline: 0;
 ${space};
 -webkit-appearance: none;
 line-height: normal;
 font-family: ${themeGet('fontFamilies.primary')};
 position: relative;
 border-style: solid;
 border-color: ${({ hasError }) =>
    themeGet(hasError ? 'colors.lightRed' : 'colors.anthracite60')};
 ::placeholder {
  color: ${themeGet('colors.pearlGray')};
  font-size: var(--fz-md);
 }
`

const InputField = ({ ...rest }) => <StyledInput {...rest} />

InputField.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.string,
  background: PropTypes.string,
  hasError: PropTypes.bool,
}
InputField.defaultProps = {
  width: '100%',
  height: '4.2rem',
  background: 'transparent',
  hasError: false,
}

export default InputField
