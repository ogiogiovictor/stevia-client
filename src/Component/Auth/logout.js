// import React, {Fragment} from 'react'
// import { connect } from 'react-redux'
// import {logout} from '../../actions/auth'
// import { Link, Redirect } from 'react-router-dom'
// import Spinner from '../Spinner/Spinner'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)


// const logoutEnd = ({auth: {loading, isAuthenticated}, logout}) => {

//   MySwal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!',
//     onClose: <Redirect to='/' />
//   }).then((result) => {
//     if (result.value) {
//       MySwal.fire({onRender: logout})
//     }
//   })

//       return loading && isAuthenticated ? <Spinner /> : (
//         <Fragment>
          
//       </Fragment>
//     )
// }

// const mapStateToProps = state => ({
//     auth: state.auth
//   });

// export default connect(mapStateToProps, {logout})(logoutEnd)
