package com.shoppinglist.model

import java.math.BigDecimal

data class Report(
        private var listName: String?,
        val total: BigDecimal,
        val prevision: BigDecimal,
        val aliment: Category,
        val beef: Category,
        val drink: Category,
        val cleaning: Category,
        val frozen: Category,
        val dessert: Category,
        val flavoring: Category,
        val others: Category,
)