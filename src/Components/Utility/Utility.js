export default function checkPresence(bonus, elements){
    let ret=[];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        for (let index = 0; index < bonus.length; index++) {
        const item = bonus[index];
        if(item.name === element)
            if(elements.length === 1)
                return [index];
            else
                ret.push(index);
        }
    };
    return ret;
};