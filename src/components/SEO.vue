<script setup>
	let globalTags = (tag, value, name) => {
		value = value.replace(/%SITE_TITLE%/g, 'Guinea Glorious ART')
		if (name !== undefined && name !== '') {
			let existing_tag = document.querySelector(`${tag}[${name}]`)
			if (existing_tag === null) {
				let meta = document.createElement(tag)
				meta.setAttribute('name', name)
				meta.setAttribute('value', value)
				document.querySelector('head').append(meta)
			}
			else {
				existing_tag.setAttribute('value', value)
			}
		}
		else {
			document.querySelector(tag).innerText = value
		}
	}
	const props = defineProps({
		blok: {
			type: Object,
			required: true,
		}
	})
	
	if (props.blok.TitleTag) {
		let title = props.blok.TitleTag
		console.log(title)
		if (props.blok.ExcludeSiteTitle !== undefined && props.blok.ExcludeSiteTitle === true) {
			title += ` | Guinea Glorious ART`
		}
		globalTags('title', `${props.blok.TitleTag}`)
	}
	if (props.blok.MetaDescription) {
		globalTags('meta', props.blok.MetaDescription, 'description')
	}
</script>