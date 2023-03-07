export function filters(obj) {
	let array = []
	let filters
	Object.keys(obj).forEach(key => {
		let value = obj[key]
		array.push(`${key}(${value})`)
	})
	if (array.length > 0) {
		filters = `filters:${array.join('')}`
	}
	return filters
}