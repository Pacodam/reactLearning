
function choice(items){
  return Math.floor(Math.random() * items.length);
}

function remove(items, item){
    var index = items.indexOf(item);
    if (index !== -1) {
      return items.splice(index, 1);
    }
    return undefined;
}

export {choice, remove};