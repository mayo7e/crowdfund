import PropTypes from 'prop-types'



const icons = {
    trash: 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z',
    facebook: 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
    menu: 'M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z',
    search: 'M7.33301 1.33337C10.645 1.33337 13.333 4.02137 13.333 7.33337C13.333 10.6454 10.645 13.3334 7.33301 13.3334C4.02101 13.3334 1.33301 10.6454 1.33301 7.33337C1.33301 4.02137 4.02101 1.33337 7.33301 1.33337ZM7.33301 12C9.91101 12 11.9997 9.91137 11.9997 7.33337C11.9997 4.75471 9.91101 2.66671 7.33301 2.66671C4.75434 2.66671 2.66634 4.75471 2.66634 7.33337C2.66634 9.91137 4.75434 12 7.33301 12ZM12.9897 12.0474L14.8757 13.9327L13.9323 14.876L12.047 12.99L12.9897 12.0474Z'
  };
  
  const Icon = (props) => (
    <svg className='icon' onClick={props.handleNavClick} width="80"  height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={icons[props.icon]} fill="black"/>
    </svg>
  );
  
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
  };
  
  export default Icon;




// import iconPaths from './selection';

// function getPath(iconName) {
//   // const icon = iconPaths.icons.find(icon => icon.tags === iconName);
//   const icon = iconPaths.icons.find(tags => tags === iconName);

//   if (icon) {
//     return icons.paths.join(' ');
//   } else {
//     console.warn(`icon ${iconName} does not exist.`);
//     return '';
//   }
// }
// // moving through Arrays  and Onejects

// const Icon = props => (
//   <svg width="22" height="22" viewBox="0 0 1024 1024">
//     <path d={getPath(props.icon)}></path>
//   </svg>
// );

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired,
// };

// export default Icon;