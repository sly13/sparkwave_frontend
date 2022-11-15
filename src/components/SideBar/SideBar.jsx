import React, { useState } from 'react';
import classes from './SideBar.module.css';
import { ReactComponent as Logo } from '../../img/sidebar-icon.svg';
import SideBarLink from '../SideBarLink/SideBarLink';
import BurgerButton from '../UI/BurgerButton/BurgerButton';


export default function SideBar() {
  const [MenuBurgerActive, setMenuBurgerActive] = useState(false)

  return (
    <div className={classes.body}>
        <div className={MenuBurgerActive ? [classes.container, classes.active].join(' ') : [classes.container]}>
            <div className={classes.firstBlock}>
              <div className={classes.row}>
              <Logo/>
              <BurgerButton pressed={MenuBurgerActive} clickHandler={()=>{
                setMenuBurgerActive(!MenuBurgerActive)
              }}/>
              </div>

              <div className={MenuBurgerActive ? [classes.links, classes.active].join(' ') : [classes.links]}>
              <SideBarLink href='/find-artists' click={()=>{setMenuBurgerActive(false)}}>
                <svg  className={classes.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.86 8.08997C19.86 8.50997 19.83 8.91997 19.78 9.30997C19.32 9.10997 18.82 8.99997 18.29 8.99997C17.07 8.99997 15.99 9.58996 15.32 10.49C14.64 9.58996 13.56 8.99997 12.34 8.99997C10.29 8.99997 8.63 10.67 8.63 12.74C8.63 15.42 10.05 17.47 11.63 18.86C11.58 18.89 11.53 18.9 11.48 18.92C11.18 19.03 10.68 19.03 10.38 18.92C7.79 18.03 2 14.35 2 8.08997C2 5.32997 4.21999 3.09998 6.95999 3.09998C8.58999 3.09998 10.03 3.87997 10.93 5.08997C11.84 3.87997 13.28 3.09998 14.9 3.09998C17.64 3.09998 19.86 5.32997 19.86 8.08997Z" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 12.74C22 17.42 17.67 20.18 15.73 20.84C15.5 20.92 15.13 20.92 14.9 20.84C14.07 20.56 12.8 19.89 11.63 18.86C10.05 17.47 8.63 15.42 8.63 12.74C8.63 10.67 10.29 9 12.34 9C13.56 9 14.64 9.58999 15.32 10.49C15.99 9.58999 17.07 9 18.29 9C18.82 9 19.32 9.11 19.78 9.31C21.09 9.89 22 11.2 22 12.74Z" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  Find Artists
                </SideBarLink>
                <SideBarLink href="/info" click={()=>{setMenuBurgerActive(false)}}>
                  <svg className={classes.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.00977 11.22V15.71C3.00977 20.2 4.80977 22 9.29977 22H14.6898C19.1798 22 20.9798 20.2 20.9798 15.71V11.22"  fill='none' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z"  fill='none' stroke-width="1.5" stroke-linecap="round"  stroke-linejoin="round"/>
                    <path d="M18.3098 12C20.3298 12 21.8098 10.36 21.6098 8.35L21.3298 5.6C20.9698 3 19.9698 2 17.3498 2H14.2998L14.9998 9.01C15.1698 10.66 16.6598 12 18.3098 12Z"  fill='none' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.63988 12C7.28988 12 8.77988 10.66 8.93988 9.01L9.15988 6.8L9.63988 2H6.58988C3.96988 2 2.96988 3 2.60988 5.6L2.33988 8.35C2.13988 10.36 3.61988 12 5.63988 12Z" fill='none' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" fill='none' stroke-width="1.5" stroke-linecap="round"  stroke-linejoin="round"/>
                  </svg>

                  Account Info
                </SideBarLink>
                <SideBarLink href="/make-drop" click={()=>{setMenuBurgerActive(false)}}>
                <svg className={classes.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"  fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                    
                    Make drop
                </SideBarLink>
                <SideBarLink href='/' click={()=>{setMenuBurgerActive(false)}}>
                  <svg className={classes.svg}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 11.15H7" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 11.1501V6.53009C2 4.49009 3.65 2.84009 5.69 2.84009H11.31C13.35 2.84009 15 4.11009 15 6.15009"  fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.48 12.2C16.98 12.68 16.74 13.42 16.94 14.18C17.19 15.11 18.11 15.7 19.07 15.7H20V17.15C20 19.36 18.21 21.15 16 21.15H6C3.79 21.15 2 19.36 2 17.15V10.15C2 7.94002 3.79 6.15002 6 6.15002H16C18.2 6.15002 20 7.95002 20 10.15V11.6H18.92C18.36 11.6 17.85 11.82 17.48 12.2Z"  fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.0002 12.62V14.68C22.0002 15.24 21.5402 15.7 20.9702 15.7H19.0402C17.9602 15.7 16.9702 14.91 16.8802 13.83C16.8202 13.2 17.0602 12.61 17.4802 12.2C17.8502 11.82 18.3602 11.6 18.9202 11.6H20.9702C21.5402 11.6 22.0002 12.06 22.0002 12.62Z" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Dashboard
                </SideBarLink>
                <SideBarLink href="/artist-detail" click={()=>{setMenuBurgerActive(false)}}>
                <svg className={classes.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"    stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" fill="none"   stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" fill="none"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" fill="none"   stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  Artist Detail
                </SideBarLink>
                
              </div>
            </div>
            
            <div className={MenuBurgerActive ? [classes.secondBlock, classes.active].join(' ') : [classes.secondBlock]}>
              <p className={classes.otherText}>other</p>
              <div className={classes.modeSwitchRow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.354 15.354C18.7172 16.0122 16.9231 16.1748 15.1946 15.8217C13.4662 15.4686 11.8796 14.6153 10.6322 13.3678C9.38472 12.1204 8.53139 10.5338 8.17827 8.80535C7.82514 7.0769 7.98779 5.28277 8.64599 3.646C6.7077 4.42673 5.10135 5.85739 4.10232 7.69272C3.10328 9.52805 2.77378 11.6537 3.17031 13.7054C3.56683 15.757 4.66467 17.6069 6.27565 18.9378C7.88662 20.2687 9.91037 20.9977 12 21C13.7969 21.0001 15.5527 20.4624 17.0415 19.4562C18.5303 18.45 19.684 17.0213 20.354 15.354Z" stroke="#FFE600" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.9807 12.5891C21.0638 11.3226 20.878 10.0528 20.4357 8.86319C19.9933 7.67354 19.3043 6.59091 18.4139 5.68638C17.5235 4.78185 16.4519 4.07588 15.2694 3.61482C14.0868 3.15375 12.8202 2.94802 11.5525 3.01113" stroke="#FFE600" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <span>Dark Mode</span>
                <div className={classes.modeSwitchButton}>
                  <div>
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.75C7.17405 1.75 7.34097 1.81914 7.46404 1.94221C7.58711 2.06528 7.65625 2.2322 7.65625 2.40625V3.0625C7.65625 3.23655 7.58711 3.40347 7.46404 3.52654C7.34097 3.64961 7.17405 3.71875 7 3.71875C6.82595 3.71875 6.65903 3.64961 6.53596 3.52654C6.41289 3.40347 6.34375 3.23655 6.34375 3.0625V2.40625C6.34375 2.2322 6.41289 2.06528 6.53596 1.94221C6.65903 1.81914 6.82595 1.75 7 1.75ZM9.625 7C9.625 7.69619 9.34844 8.36387 8.85616 8.85616C8.36387 9.34844 7.69619 9.625 7 9.625C6.30381 9.625 5.63613 9.34844 5.14384 8.85616C4.65156 8.36387 4.375 7.69619 4.375 7C4.375 6.30381 4.65156 5.63613 5.14384 5.14384C5.63613 4.65156 6.30381 4.375 7 4.375C7.69619 4.375 8.36387 4.65156 8.85616 5.14384C9.34844 5.63613 9.625 6.30381 9.625 7ZM9.3205 10.2484L9.78447 10.7124C9.90824 10.8319 10.074 10.8981 10.2461 10.8966C10.4181 10.8951 10.5827 10.8261 10.7044 10.7044C10.8261 10.5827 10.8951 10.4181 10.8966 10.2461C10.8981 10.074 10.8319 9.90824 10.7124 9.78447L10.2484 9.3205C10.1247 9.20096 9.9589 9.13481 9.78683 9.13631C9.61476 9.1378 9.45017 9.20682 9.32849 9.32849C9.20682 9.45017 9.1378 9.61476 9.13631 9.78683C9.13481 9.9589 9.20096 10.1247 9.3205 10.2484ZM10.7118 3.28759C10.8348 3.41066 10.9039 3.57755 10.9039 3.75156C10.9039 3.92558 10.8348 4.09247 10.7118 4.21553L10.2484 4.6795C10.1879 4.74218 10.1155 4.79217 10.0354 4.82657C9.95536 4.86096 9.86924 4.87906 9.78211 4.87982C9.69497 4.88058 9.60856 4.86397 9.5279 4.83098C9.44725 4.79798 9.37398 4.74925 9.31237 4.68763C9.25075 4.62602 9.20202 4.55275 9.16902 4.47209C9.13603 4.39144 9.11942 4.30503 9.12018 4.21789C9.12094 4.13076 9.13904 4.04464 9.17343 3.96458C9.20783 3.88451 9.25782 3.8121 9.3205 3.75156L9.78447 3.28759C9.90753 3.16457 10.0744 3.09545 10.2484 3.09545C10.4225 3.09545 10.5893 3.16457 10.7124 3.28759H10.7118ZM11.5938 7.65625C11.7678 7.65625 11.9347 7.58711 12.0578 7.46404C12.1809 7.34097 12.25 7.17405 12.25 7C12.25 6.82595 12.1809 6.65903 12.0578 6.53596C11.9347 6.41289 11.7678 6.34375 11.5938 6.34375H10.9375C10.7635 6.34375 10.5965 6.41289 10.4735 6.53596C10.3504 6.65903 10.2812 6.82595 10.2812 7C10.2812 7.17405 10.3504 7.34097 10.4735 7.46404C10.5965 7.58711 10.7635 7.65625 10.9375 7.65625H11.5938ZM7 10.2812C7.17405 10.2812 7.34097 10.3504 7.46404 10.4735C7.58711 10.5965 7.65625 10.7635 7.65625 10.9375V11.5938C7.65625 11.7678 7.58711 11.9347 7.46404 12.0578C7.34097 12.1809 7.17405 12.25 7 12.25C6.82595 12.25 6.65903 12.1809 6.53596 12.0578C6.41289 11.9347 6.34375 11.7678 6.34375 11.5938V10.9375C6.34375 10.7635 6.41289 10.5965 6.53596 10.4735C6.65903 10.3504 6.82595 10.2812 7 10.2812ZM3.75156 4.6795C3.81249 4.74047 3.88483 4.78885 3.96446 4.82186C4.04408 4.85488 4.12943 4.87188 4.21563 4.87191C4.30182 4.87194 4.38718 4.855 4.46683 4.82204C4.54648 4.78908 4.61886 4.74076 4.67983 4.67983C4.7408 4.6189 4.78917 4.54656 4.82219 4.46693C4.8552 4.38731 4.87221 4.30196 4.87224 4.21576C4.87227 4.12957 4.85533 4.04421 4.82237 3.96456C4.78941 3.88491 4.74109 3.81254 4.68016 3.75156L4.21553 3.28759C4.09176 3.16805 3.92599 3.10191 3.75392 3.1034C3.58186 3.1049 3.41726 3.17391 3.29559 3.29559C3.17391 3.41726 3.1049 3.58186 3.1034 3.75392C3.10191 3.92599 3.16805 4.09176 3.28759 4.21553L3.75156 4.6795ZM4.6795 10.2484L4.21553 10.7124C4.09176 10.8319 3.92599 10.8981 3.75392 10.8966C3.58186 10.8951 3.41726 10.8261 3.29559 10.7044C3.17391 10.5827 3.1049 10.4181 3.1034 10.2461C3.10191 10.074 3.16805 9.90824 3.28759 9.78447L3.75156 9.3205C3.87533 9.20096 4.0411 9.13481 4.21317 9.13631C4.38524 9.1378 4.54983 9.20682 4.67151 9.32849C4.79318 9.45017 4.8622 9.61476 4.86369 9.78683C4.86519 9.9589 4.79904 10.1247 4.6795 10.2484ZM3.0625 7.65625C3.23655 7.65625 3.40347 7.58711 3.52654 7.46404C3.64961 7.34097 3.71875 7.17405 3.71875 7C3.71875 6.82595 3.64961 6.65903 3.52654 6.53596C3.40347 6.41289 3.23655 6.34375 3.0625 6.34375H2.40625C2.2322 6.34375 2.06528 6.41289 1.94221 6.53596C1.81914 6.65903 1.75 6.82595 1.75 7C1.75 7.17405 1.81914 7.34097 1.94221 7.46404C2.06528 7.58711 2.2322 7.65625 2.40625 7.65625H3.0625Z" fill="#717171"/>
                    </svg>
                  </div>
                  <div>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_f_1_274)">
                      <path d="M15.8732 12.9566C14.9184 13.3406 13.8718 13.4354 12.8635 13.2295C11.8553 13.0235 10.9298 12.5257 10.2021 11.798C9.47441 11.0703 8.97663 10.1448 8.77065 9.13658C8.56466 8.12831 8.65953 7.08174 9.04349 6.12695C7.91282 6.58238 6.97578 7.41693 6.39301 8.48754C5.81024 9.55815 5.61803 10.7981 5.84933 11.9949C6.08064 13.1917 6.72105 14.2708 7.66078 15.0472C8.60052 15.8235 9.78104 16.2488 11 16.2501C12.0482 16.2502 13.0724 15.9365 13.9409 15.3496C14.8093 14.7626 15.4823 13.9292 15.8732 12.9566Z" stroke="#FFE500" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <path d="M15.8732 12.9565C14.9184 13.3404 13.8718 13.4353 12.8635 13.2293C11.8553 13.0233 10.9298 12.5256 10.2021 11.7979C9.47442 11.0702 8.97665 10.1447 8.77066 9.13646C8.56467 8.12819 8.65955 7.08162 9.0435 6.12683C7.91283 6.58226 6.97579 7.41681 6.39302 8.48742C5.81025 9.55803 5.61805 10.798 5.84935 11.9948C6.08065 13.1916 6.72107 14.2707 7.6608 15.047C8.60053 15.8234 9.78106 16.2487 11 16.25C12.0482 16.25 13.0724 15.9364 13.9409 15.3495C14.8094 14.7625 15.4823 13.9291 15.8732 12.9565Z" stroke="#FFE500" stroke-linecap="round" stroke-linejoin="round"/>
                      <defs>
                      <filter id="filter0_f_1_274" x="0.253906" y="0.626953" width="21.1193" height="21.1232" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_1_274"/>
                      </filter>
                      </defs>
                    </svg>
                  </div>
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}
