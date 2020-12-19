import { Op } from 'sequelize';
import models from '../models';

const { Users, Roles } = models;
/**
 * @exports
 * @class UserService
 */
class UserService {
  /**
   * create new user
   * @static createuser
   * @param {object} newuser
   * @memberof userService
   * @returns {object} data
   */
  static createuser(newUser) {
    return Users.create(newUser);
  }

  static findByProp(prop) {
    return Users.findAll({
      where: prop,
    });
  }

  static updateAtt(set, prop) {
    return Users.update(set, {
      where: prop,
    });
  }

  static getUsers(id) {
    return Users.findAll(
      {
        where: {
          id,
          isVerified: 'false',
        },
        attributes: ['id', 'email', 'RoleId', 'lineManager', 'isVerified'],
      },
    );
  }

  static getAllUsers(userId) {
    return Users.findAll(
      {
        where: {
          id: {
            [Op.not]: userId,
          },
          RoleId: {
            [Op.notIn]: [1, 2],
          },
        },
        include: [{
          as: 'lineManagerInfo',
          model: Users,
          attributes: ['firstName', 'lastName'],
        }, {
          as: 'roles',
          model: Roles,
          attributes: ['name'],
        }],
      },
    );
  }

  /**
   * Find a User in storage using login credentials.
   * @param {*} prop HTTP request
   * @returns {*} JSON data
   */
  static findByEmail(prop) {
    return Users.findOne({
      where: { email: prop },
    });
  }

  static findById(modelId) {
    return Users.findOne({
      where: { id: modelId },
    });
  }

  static findByLineManagerId(lineManagerId) {
    return Users.findOne({
      where: { id: lineManagerId },
    });
  }
}
export default UserService;
