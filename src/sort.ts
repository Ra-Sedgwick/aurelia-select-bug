export class SortValueConverter {
    public toView(array, propertyName, direction) {
        if (!array || array === undefined) { return []; }
        let factor = direction === 'ascending' ? -1 : 1;
        return array.slice(0).sort((a, b) => b[propertyName].localeCompare(a[propertyName]) * factor);
    }
}