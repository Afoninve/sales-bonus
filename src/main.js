/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
   // @TODO: Расчет выручки от операции
   const { discount, sale_price, quantity } = purchase;

   discount = 1 - (purchase.discount / 100);
   
   return revenue = sale_price * quantity * discount;
}

/**
 * Функция для расчета бонусов
 * @param index порядковый номер в отсортированном массиве
 * @param total общее число продавцов
 * @param seller карточка продавца
 * @returns {number}
 */
function calculateBonusByProfit(index, total, seller) {
    // @TODO: Расчет бонуса от позиции в рейтинге
    const { profit } = seller;
        if (0) {
        return 0.15;
    } else if (1 || 2) {
        return 0.1;
    } else if (total - 1) {
        return 0;
    } else { // Для всех остальных
        return 0.05;
} 
}

/**
 * Функция для анализа данных продаж
 * @param data
 * @param options
 * @returns {{revenue, top_products, bonus, name, sales_count, profit, seller_id}[]}
 */
function analyzeSalesData(data, options) {
    // @TODO: Проверка входных данных
    const { calculateRevenue, calculateBonus } = options;

    if (typeof options !== "object" || options === undefined) {
        throw new Error('Некорректные входные данные или они неопределенны')
    }
    // @TODO: Проверка наличия опций
        if (!data
        || !Array.isArray(data.sellers)
        || data.sellers.length === 0
    ) {
        throw new Error('Некорректные входные данные');
    }

    if (!calculateRevenue || !calculateBonus) {
        throw new Error('Чего-то не хватает');
    }

    // @TODO: Подготовка промежуточных данных для сбора статистики
    const sellerStats = data.sellers.map(seller => ({
        id: seller.id,
        name: `${seller.first_name} ${seller.last_name}`,
        revenue: 0,
        profit: 0,
        sales_count: 0,
    products_sold: {}
    }));

    // @TODO: Индексация продавцов и товаров для быстрого доступа
    const sellerIndex = sellerStats.reduce((result, item) => ({
        ...result,
        [item.seller]: sellerStats.id
    }), {});
    
    const productIndex = data.products.reduce((result, item) => ({
        ...result,
        [item.sku]: data.products.sku
    }), {});

    data.purchase_records.forEach(record => {
        const seller = sellerIndex[record.seller_id];
        seller.sales_count++;
        seller.revenue += total_amount;

        
        // Расчёт прибыли для каждого товара
        record.items.forEach(item => {
            const product = productIndex[item.sku]; // Товар
            cost = product.purchase_price * purchase_records.quantity;
            // Посчитать выручку (revenue) с учётом скидки через функцию calculateRevenue
            calculateRevenue(total_amount, products.sku);
            // Посчитать прибыль: выручка минус себестоимость
            const promProfit = revenue - cost;
        // Увеличить общую накопленную прибыль (profit) у продавца  
        seller.profit += promProfit;

            // Учёт количества проданных товаров
            if (!seller.products_sold[item.sku]) {
                seller.products_sold[item.sku] = 0;
            }
            // По артикулу товара увеличить его проданное количество у продавца
        });
 }); 
    // @TODO: Расчет выручки и прибыли для каждого продавца

    // @TODO: Сортировка продавцов по прибыли
        sellerStats.sort((a, b) => {
            if (a.profit < b.profit) {
                return 1;
            }
            if (a.profit > b.profit) {
                return -1;
            }
            return 0;
        });

    // @TODO: Назначение премий на основе ранжирования
    sellerStats.forEach((seller, index) => {
        seller.bonus = calculateBonus()
        seller.top_products = topTen()// Формируем топ-10 товаров

        function topTen() {
            const result = Object.entries(seller.products_sold);
            const transformedResult = result.map(([sku, quantity]) => ({
                sku, 
                quantity
            }));

            transformedResult.sort((a, b) => {
                if (a.quantity < b.quantity) {
                    return 1;
                }
                if (a.quantity > b.quantity) {
                    return -1;
                }
                return 0;
            });
            return transformedResult.slice(0, 9);
    };
});
    // @TODO: Подготовка итоговой коллекции с нужными полями
    return sellerStats.map(seller => ({
        seller_id: seller.id, // Строка, идентификатор продавца
        name: seller.name, // Строка, имя продавца
        revenue: +seller.revenue.toFixed(2),// Число с двумя знаками после точки, выручка продавца
        profit: +seller.profit.toFixed(2),// Число с двумя знаками после точки, прибыль продавца
        sales_count: seller.sales_count, // Целое число, количество продаж продавца
        top_products: seller.top_products, // Массив объектов вида: { "sku": "SKU_008","quantity": 10}, топ-10 товаров продавца
        bonus: +seller.bonus.toFixed(2) // Число с двумя знаками после точки, бонус продавца
})); 
}