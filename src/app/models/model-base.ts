export class ModelBase {
  // fix for cloudfirestore issue
  // https://github.com/angular/angularfire2/issues/1335
  getData(): object {
    const result = {};
    Object.keys(this).map(key => result[key] = this[key]);
    return result;
  }
}
