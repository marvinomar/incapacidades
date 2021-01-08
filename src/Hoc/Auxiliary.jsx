/* 
This Component helps to wrap other react component without having to use a div as a parent element
more info here: 
https://es.reactjs.org/docs/fragments.html 
https://dev.to/tumee/react-fragments-what-why-how-2kh1
since React v16.2.0 <React.Fragment> serves the same purpose
*/

const aux = props => props.children;

export default aux;