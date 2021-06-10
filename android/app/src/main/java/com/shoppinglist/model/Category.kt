package com.shoppinglist.model

import java.math.BigDecimal

data class Category(
        val items: List<Item>,
        val qtd: Int,
        val total: BigDecimal
)