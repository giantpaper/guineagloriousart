<script setup>
	let globalTags = (tag, value, name) => {
		if (name !== undefined && name !== '') {
			let existing_tag = document.querySelector(`${tag}[${name}]`)
			if (existing_tag === null) {
				let meta = document.createElement(tag)
				meta.setAttribute('name', name)
				meta.setAttribute('content', value)
				document.querySelector('head').append(meta)
			}
			else {
				existing_tag.setAttribute('content', value)
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
		globalTags('title', props.blok.TitleTag)
	}
	if (props.blok.MetaDescription) {
		globalTags('meta', props.blok.MetaDescription, 'description')
	}
</script>