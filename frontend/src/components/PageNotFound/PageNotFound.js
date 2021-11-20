import React from 'react'
import '../../css/master.css'

/**
 * A function returns a div; it is related to the Page Not Found.
 * @author Jacob Yousif
 *
 * @return {*}
 */
function PageNotFound() {
	return (
		<div className='page_not_found'>
			<h1>Code 404 - Page Not Found</h1>
			<h2 className='h'>Sorry, the page you requested it does not exist.</h2>
		</div>
	)
}

export default PageNotFound
