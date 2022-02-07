// this is for INLINE or JSX styling

const gradeColorFunction = (grade) => {
 
    if(grade === 'A+'){
        return {background: '#00d1c1'}
    }

    if(grade === 'A'){
        return {background: '#00adc4'}
    }

    if(grade === 'B+'){
        return {background: '#0096c6'}
    }

    if(grade === 'B'){
        return {background: '#0096d6'}
    }

    if(grade === 'C+'){
        return {background: '#0077ca'}
    }

    if(grade === 'C'){
        return {background: '#0057a9'}
    }

    if(grade === 'D'){
        return {background: '#004383'}
    }

    if(grade === 'V'){
        return {background: '#002f69'}
    }

    // end of gradeColorFunction
}

module.exports = gradeColorFunction; 