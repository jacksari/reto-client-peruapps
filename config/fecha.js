import moment from 'moment';
const fechaFunction = (fecha) => {

    return moment(fecha).locale('es').format('L');
}

export default fechaFunction;
