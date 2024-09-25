import styled from '@emotion/styled'
import {ChangeEvent} from 'react';

type Props = {
    id: string
    checked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = (props: Props) => {
    const {checked, onChange, id} = props

    return (
        <Round>
            <input type="checkbox" id={id} checked={checked}  onChange={onChange}/>
            <label htmlFor={id}></label>
        </Round>
    )
}

const Round = styled.div`
  position: relative;
  
  & > label {
    background-color: #fff;
    border: 2px solid #646464;
    border-radius: 50%;
    cursor: pointer;
    height: 24px;
    width: 24px;
    left: 0;
    position: absolute;
    top: 0;
    
    &:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: "";
      height: 6px;
      left: 5px;
      opacity: 0;
      position: absolute;
      top: 6px;
      transform: rotate(-45deg);
      width: 12px;
    }
  }
  
  & > input[type="checkbox"] {
    visibility: hidden; 
    
    &:checked + label {
      background-color: #FF5D17;
      border-color: #FF5D17;
    }
    
    &:checked + label:after {
      opacity: 1;
    }
  }
`

