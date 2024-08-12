const mySqlPool = require("../config/database");

exports.getAllCards = async (req, res) => {
  try {
    const data = await mySqlPool.query("SELECT * from cards");

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No data found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Data fetched successfully",
      total: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting all cards",
      error,
    });
  }
};

exports.getCardById = async (req, res) => {
  try {
    const cardId = req.params.idcards;

    if (!cardId) {
      return res.status(404).send({
        success: false,
        message: "No id found",
      });
    }
    const data = await mySqlPool.query(`SELECT * from cards WHERE idcards=?`, [
      cardId,
    ]);

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No data found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Data fetched successfully",
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting card by id",
      error,
    });
  }
};

exports.createCard = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    const data = mySqlPool.query(
      `INSERT INTO cards (question,answer) VALUES (?,?)`,
      [question, answer]
    );

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Cannot create card right now",
      });
    }

    res.status(201).send({
      success: true,
      message: "New card created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Cannot create card right now",
      error,
    });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const cardId = req.params.idcards;

    if (!cardId) {
      return res.status(404).send({
        success: false,
        message: "No id found",
      });
    }

    const { question, answer } = req.body;

    const data = await mySqlPool.query(
      `UPDATE cards SET question=? , answer=? WHERE idcards=?`,
      [question, answer, cardId]
    );

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Cannot update card right now",
      });
    }

    res.status(200).send({
      success: true,
      message: "Data updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Cannot update card right now",
      error,
    });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const cardId = req.params.idcards;

    if (!cardId) {
      return res.status(404).send({
        success: false,
        message: "No id found",
      });
    }

    await mySqlPool.query(`DELETE FROM cards WHERE idcards=?`, [cardId]);
    res.status(200).send({
      success: true,
      message: "Card deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Cannot delete card right now",
      error,
    });
  }
};
