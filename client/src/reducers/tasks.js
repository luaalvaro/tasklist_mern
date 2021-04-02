export default (tasks = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return {...tasks, action: [action.payload]};
        default:
            return tasks;
    }
}