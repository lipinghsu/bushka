import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkUserIsAdmin } from '../../Utils';
import './styles.scss'


const mapState = ({ user}) => ({
    currentUser: user.currentUser
})

const AdminToolbar = props => {
    const { currentUser} = useSelector(mapState);
    const isAdmin = checkUserIsAdmin(currentUser);

    return null;
}

export default AdminToolbar;