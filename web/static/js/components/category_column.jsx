import React from "react"
import styles from "./css_modules/category_column.css"

function CategoryColumn(props) {
  const categoryToEmoticonUnicodeMap = {
    happy: "😊",
    sad: "😥",
    confused: "😕",
    "action-item": "🚀",
  }

  const emoticonUnicode = categoryToEmoticonUnicodeMap[props.category]
  const filteredIdeas = props.ideas.filter(idea => idea.category === props.category)
  const filteredIdeasList = filteredIdeas.map(idea =>
    <li className="item" key={`${idea.body}`}>{idea.body}</li>,
  )

  return (
    <section className="column">
      <div className="ui center aligned basic segment">
        <i className={styles.icon}>{emoticonUnicode}</i>
        <p><a>@{props.category}</a></p>
      </div>
      <div className="ui divider" />
      <ul className={`${props.category} ideas ui divided list`}>
        {filteredIdeasList}
      </ul>
    </section>
  )
}

CategoryColumn.propTypes = {
  ideas: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      category: React.PropTypes.string,
      body: React.PropTypes.string,
    }),
  ).isRequired,
  category: React.PropTypes.string.isRequired,
}

export default CategoryColumn
